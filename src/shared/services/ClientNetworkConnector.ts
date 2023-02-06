import {
  CONNECTOR_INFO_DISCONNECTED,
  InternalRequest,
  InternalRequestHandler,
  InternalResponse,
  NetworkConnectorInfo,
} from '../data/InternalConnectionTypes';
import { Unsubscriber } from '../util/PapiUtil';
import INetworkConnector from './INetworkConnector';
import {
  InitClient,
  Message,
  MessageType,
  WebsocketRequest,
  WebsocketResponse,
} from '../data/NetworkConnectorTypes';

// TODO: implement request timeout logic
/** Holds promises for a request */
type LiveRequest<TReturn> = {
  requestId: number;
  resolve: (
    value: InternalResponse<TReturn> | PromiseLike<InternalResponse<TReturn>>,
  ) => void;
  reject: (reason?: unknown) => void;
};

/**
 * Handles the connection from the client to the server
 */
export default class ClientNetworkConnector implements INetworkConnector {
  connectorInfo: NetworkConnectorInfo = CONNECTOR_INFO_DISCONNECTED;

  connecting = false;

  connected = false;

  /** The websocket connected to the server */
  private websocket?: WebSocket;

  /** All message subscriptions - arrays of functions that run each time a message with a specific message type comes in */
  private messageSubscriptions = new Map<
    MessageType,
    ((eventData: Message) => void)[]
  >();

  /** Promise that resolves when the connection is finished or rejects if disconnected before the connection finishes */
  private connectPromise?: Promise<NetworkConnectorInfo>;

  /** Function that removes this initClient handler from the connection */
  private unsubscribeHandleInitClientMessage?: Unsubscriber;

  /** Function that removes this response handler from the connection */
  private unsubscribeHandleResponseMessage?: Unsubscriber;

  /** Function that removes this handleRequest from the connection */
  private unsubscribeHandleRequestMessage?: Unsubscriber;

  /** Function that removes this onMessage handler from the websocket message event */
  private unsubscribeWebsocketMessageListener?: Unsubscriber;

  /** Function that removes this disconnect handler from the websocket close event */
  private unsubscribeWebsocketCloseListener?: Unsubscriber;

  /**
   * Function to call when we receive a request that is registered on this connector.
   * Handles requests from the connection and returns a response to send back
   */
  private localRequestHandler?: InternalRequestHandler;

  /**
   * Function to call when we are sending a request.
   * Returns a clientId to which to send the request based on the requestType
   */
  private requestRouter?: (requestType: string) => number;

  /** All requests that are waiting for a response */
  // Disabled no-explicit-any because assigning a request with generic type to LiveRequest<unknown> gave error
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private requests = new Map<number, LiveRequest<any>>();

  /**
   * Send a message to the server via websocket. Throws if not connected
   * @param message message to send
   */
  // Add if needed: @param unsafe whether to get the client even if we aren't connected. WARNING: SETTING THIS FLAG MEANS NOT CHECKING FOR INITIALIZATION. DO NOT USE OUTSIDE OF INITIALIZATION. There may be no clientId
  private sendMessage(message: Message): void {
    // TODO: add message queueing
    if (!this.connected || !this.websocket)
      throw new Error(
        `Trying to send message when not connected! Message ${message}`,
      );

    if (
      message.type === MessageType.Response &&
      this.connectorInfo.clientId === message.senderId
    ) {
      // This message is from us and for us. Handle the message as if we just received it
      this.onMessage(
        {
          data: message as unknown as string,
        } as MessageEvent,
        true,
      );
    } else {
      // This message is for someone else. Send the message
      this.websocket.send(JSON.stringify(message));
    }
  }

  /**
   * Receives and appropriately publishes server websocket messages
   * @param event websocket message information
   * @param fromSelf whether this message is from this connector instead of from someone else
   */
  private onMessage(event: MessageEvent<string>, fromSelf = false) {
    const data = fromSelf
      ? (event.data as unknown as Message)
      : (JSON.parse(event.data as string) as Message);

    const callbacks = this.messageSubscriptions.get(data.type);
    if (callbacks) callbacks.forEach((callback) => callback(data));
  }

  /**
   * Unsubscribes a function from running on websocket messages
   * @param messageType the type of message from which to unsubscribe the function
   * @param callback function to unsubscribe from being run on websocket messages.
   * @returns true if successfully unsubscribed
   * Likely will never need to be exported from this file. Just use subscribe, which returns a matching unsubscriber function that runs this.
   */
  private unsubscribe(
    messageType: MessageType,
    callback: (eventData: Message) => void,
  ): boolean {
    const callbacks = this.messageSubscriptions.get(messageType);

    if (!callbacks) return false; // Did not find any callbacks for the message type

    const callbackIndex = callbacks.indexOf(callback);
    if (callbackIndex < 0) return false; // Did not find this callback for the message type

    // Remove the callback
    callbacks.splice(callbackIndex, 1);

    // Remove the map entry if there are no more callbacks
    if (callbacks.length === 0) this.messageSubscriptions.delete(messageType);

    // Indicate successfully removed the callback
    return true;
  }

  /**
   * Subscribes a function to run on websocket messages of a particular type
   * @param messageType the type of message on which to subscribe the function
   * @param callback function to run with the contents of the websocket message
   * @returns unsubscriber function to run to stop calling the passed-in function on websocket messages
   */
  private subscribe(
    messageType: MessageType,
    // Any is here because I dunno how to narrow Message type to a specific message type in parameters of a function
    // TODO: investigate this further another time
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: (eventData: Message | any) => void,
  ): Unsubscriber {
    let callbacks = this.messageSubscriptions.get(messageType);
    if (!callbacks) {
      callbacks = [];
      this.messageSubscriptions.set(messageType, callbacks);
    }
    callbacks.push(callback);

    return () => this.unsubscribe(messageType, callback);
  }

  async connect(
    localRequestHandler: InternalRequestHandler,
    requestRouter: (requestType: string) => number,
  ) {
    // NOTE: This does not protect against sending two different request handlers. See ConnectionService for that
    // We don't need to run this more than once
    if (this.connectPromise) return this.connectPromise;

    this.connecting = true;
    this.localRequestHandler = localRequestHandler;
    this.requestRouter = requestRouter;

    /** Function that resolves the connection promise to be run after receiving a client id */
    let resolveConnect: (
      value: NetworkConnectorInfo | PromiseLike<NetworkConnectorInfo>,
    ) => void;
    /** Function that rejects the connection promise */
    let rejectConnect: (reason?: string) => void;

    /** The promise that resolves when the service is finished connecting */
    this.connectPromise = new Promise<NetworkConnectorInfo>(
      (resolve, reject) => {
        resolveConnect = resolve;
        rejectConnect = reject;
      },
    );

    // Set up subscriptions that the service needs to work
    // Get the client id from the server on new connections
    this.unsubscribeHandleInitClientMessage = this.subscribe(
      MessageType.InitClient,
      ({ connectorInfo: newConnectorInfo }: InitClient) => {
        this.connectorInfo = newConnectorInfo;

        if (!this.websocket) {
          rejectConnect('websocket is gone!');
          return;
        }

        // Listen for responses from the server and resolve the request promise
        this.unsubscribeHandleResponseMessage = this.subscribe(
          MessageType.Response,
          this.handleResponseMessage.bind(this),
        );

        // Listen for requests from the server and run the request handler
        this.unsubscribeHandleRequestMessage = this.subscribe(
          MessageType.Request,
          (requestMessage: WebsocketRequest) =>
            this.handleRequestMessage(requestMessage, true),
        );

        // Finished setting up WebSocketService and connecting! Resolve the promise
        this.connected = true;
        resolveConnect(this.connectorInfo);
      },
    );

    // Connect the websocket
    this.websocket = new WebSocket('ws://localhost:8876');

    // Attach event listeners and create unsubscribers for them
    const messageEventListener = this.onMessage.bind(this);
    const closeEventListener = this.disconnect.bind(this);
    this.websocket.addEventListener('message', messageEventListener);
    this.websocket.addEventListener('close', closeEventListener);
    this.unsubscribeWebsocketMessageListener = () => {
      if (!this.websocket) return false;
      this.websocket.removeEventListener('message', messageEventListener);
      return true;
    };
    this.unsubscribeWebsocketCloseListener = () => {
      if (!this.websocket) return false;
      this.websocket.removeEventListener('close', closeEventListener);
      return true;
    };

    return this.connectPromise;
  }

  /**
   * Function that handles websocket messages of type Response.
   * Resolves the request associated with the received response message
   * @param response Response message to resolve
   */
  private handleResponseMessage(response: WebsocketResponse<unknown>) {
    const { senderId, responderId, requestId } = response;
    if (this.connectorInfo.clientId !== senderId)
      throw new Error(
        `Received response from responderId ${responderId} with wrong senderId ${senderId}!`,
      );

    const liveRequest = this.requests.get(requestId);
    if (!liveRequest)
      throw new Error(
        `Received response from responderId ${responderId} for nonexistent requestId ${requestId}`,
      );

    // Remove the request from the requests because it is receiving a response
    this.requests.delete(requestId);

    // Run the request's response function with the response
    liveRequest.resolve(response);
  }

  /**
   * Function that handles incoming websocket messages and locally sent messages of type Request.
   * Runs the requestHandler provided in connect() and sends a message with the response
   * @param requestMessage request message to handle
   * @param incoming whether this message is coming from the server and we should definitely handle it locally
   *   or if it is a locally sent request and we should send to the server if we don't have a local handler
   */
  private async handleRequestMessage(
    requestMessage: WebsocketRequest<unknown>,
    incoming: boolean,
  ) {
    if (!this.requestRouter)
      throw new Error(
        `Received a request but cannot route it without a requestRouter`,
      );

    // Figure out if we can handle this request or if we need to send it
    // We should handle it here if it came from the server (which means the server thinks we have a handler for it)
    // or if we actually have a handler for it. Otherwise send the request to the server
    if (
      incoming ||
      this.connectorInfo.clientId ===
        this.requestRouter(requestMessage.requestType)
    ) {
      // This request is ours. Handle the request
      if (!this.localRequestHandler)
        throw Error('Handling request without a requestHandler!');

      // Run the request handler for this request
      const response = await this.localRequestHandler(
        requestMessage.requestType,
        requestMessage,
      );

      // Send the response to this request
      this.sendMessage({
        type: MessageType.Response,
        requestType: requestMessage.requestType,
        ...response,
      });
    } else {
      // This request is for someone else. Send the request to the server to handle/forward
      this.sendMessage(requestMessage);
    }
  }

  async notifyClientConnected() {
    this.sendMessage({
      type: MessageType.ClientConnect,
      senderId: this.connectorInfo.clientId,
      connectorInfo: this.connectorInfo,
    });
    // In websocket land, we do not receive a response from the server when we notify client connected
    // TODO: change the clientconnected into a request that resolves properly
    return Promise.resolve();
  }

  disconnect() {
    if (!this.connected)
      throw new Error('Web socket closed without connecting');

    this.connecting = false;
    this.localRequestHandler = undefined;
    this.connected = false;
    this.connectPromise = undefined;
    this.connectorInfo = CONNECTOR_INFO_DISCONNECTED;
    if (this.unsubscribeHandleInitClientMessage)
      this.unsubscribeHandleInitClientMessage();
    if (this.unsubscribeHandleResponseMessage)
      this.unsubscribeHandleResponseMessage();
    if (this.unsubscribeHandleRequestMessage)
      this.unsubscribeHandleRequestMessage();

    if (this.unsubscribeWebsocketMessageListener)
      this.unsubscribeWebsocketMessageListener();
    if (this.unsubscribeWebsocketCloseListener)
      this.unsubscribeWebsocketCloseListener();

    if (this.websocket) {
      this.websocket.close();
      this.websocket = undefined;
    }
  }

  async request<TParam, TReturn>(
    requestType: string,
    request: InternalRequest<TParam>,
  ): Promise<InternalResponse<TReturn>> {
    // Set up a promise we can resolve later
    let liveRequest: LiveRequest<TReturn> | undefined;
    const requestPromise = new Promise<InternalResponse<TReturn>>(
      (resolve, reject) => {
        liveRequest = {
          requestId: request.requestId,
          resolve,
          reject,
        };
      },
    );

    if (!liveRequest)
      throw new Error(
        `Live request was not created for requestId ${request.requestId}`,
      );

    // Save the live request to resolve when we get the response
    this.requests.set(request.requestId, liveRequest);

    // Send the request corresponding to the live request promise
    this.handleRequestMessage(
      {
        type: MessageType.Request,
        requestType,
        ...request,
      },
      false,
    );

    return requestPromise;
  }
}
