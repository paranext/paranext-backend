import { CloseEvent, MessageEvent, WebSocket, WebSocketServer } from 'ws';
import {
  CLIENT_ID_SERVER,
  ConnectionStatus,
  InternalRequest,
  InternalRequestHandler,
  InternalResponse,
  NetworkConnectorInfo,
} from '@shared/data/InternalConnectionTypes';
import INetworkConnector from '@shared/services/INetworkConnector';
import logger from '@shared/util/logger';
import { Unsubscriber } from '@shared/util/PapiUtil';
import {
  ClientConnect,
  Message,
  MessageType,
  WebSocketRequest,
  WebSocketResponse,
  WEBSOCKET_PORT,
} from '@shared/data/NetworkConnectorTypes';

// #region local variables

// TODO: implement request timeout logic
/** Holds promises for a request */
type LiveRequest<TReturn> = {
  requestId: number;
  resolve: (
    value: InternalResponse<TReturn> | PromiseLike<InternalResponse<TReturn>>,
  ) => void;
  reject: (reason?: unknown) => void;
};

/** A WebSocket client and information about its connection */
type WebSocketClient = {
  webSocket: WebSocket;
  connectorInfo: NetworkConnectorInfo;
  /** Whether the client has responded to initClient and told us it is ready to receive messages */
  connected: boolean;
};

// #endregion

/**
 * Handles the endpoint and connections from the server to the clients
 */
export default class ServerNetworkConnector implements INetworkConnector {
  // #region INetworkConnector members

  connectorInfo: NetworkConnectorInfo = { clientId: CLIENT_ID_SERVER };

  connectionStatus: ConnectionStatus = ConnectionStatus.Disconnected;

  // #endregion

  // #region private members

  /** The webSocket connected to the server */
  private webSocketServer?: WebSocketServer;

  /** The next client id to use for a new connection. Starts at 1 because the server is 0 */
  private nextClientId = 1;

  /** The webSocket clients that are connected and information about them */
  private clientSockets = new Map<number, WebSocketClient>();

  /** All message subscriptions - arrays of functions that run each time a message with a specific message type comes in */
  private messageSubscriptions = new Map<
    MessageType,
    ((eventData: Message, clientId: number) => void)[]
  >();

  /** Promise that resolves when finished starting the server or rejects if disconnected before the server finishes */
  private connectPromise?: Promise<NetworkConnectorInfo>;

  /** Function that removes this clientConnect handler from connections */
  private unsubscribeHandleClientConnectMessage?: () => boolean;

  /** Function that removes this response handler from connections */
  private unsubscribeHandleResponseMessage?: () => boolean;

  /** Function that removes this handleRequest from connections */
  private unsubscribeHandleRequestMessage?: () => boolean;

  /**
   * Function to call when we receive a request that is registered on this connector.
   * Handles requests from connections and returns a response to send back
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

  // #endregion

  // #region INetworkConnector methods

  connect = async (
    localRequestHandler: InternalRequestHandler,
    requestRouter: (requestType: string) => number,
  ) => {
    // NOTE: This does not protect against sending two different request handlers. See ConnectionService for that
    // We don't need to run this more than once
    if (this.connectPromise) return this.connectPromise;

    this.connectionStatus = ConnectionStatus.Connecting;
    this.localRequestHandler = localRequestHandler;
    this.requestRouter = requestRouter;

    // Set up subscriptions that the service needs to work
    // Mark the connection fully connected and notify that a client was connected
    this.unsubscribeHandleClientConnectMessage = this.subscribe(
      MessageType.ClientConnect,
      (clientConnect: ClientConnect, clientId) => {
        // Verify that the client has the correct clientId. Otherwise nothing will work properly
        if (clientId !== clientConnect.senderId)
          // TODO: tell the client that they messed up, not throw an exception on the server
          throw new Error(
            `WebSocket with clientId ${clientId} tried to finalize connection with incorrect senderId ${clientConnect.senderId}`,
          );
        // Client finished connecting!
        this.getClientSocket(clientId).connected = true;
        // TODO: Send an event that the client is fully connected
      },
    );

    // Listen for responses from the clients and resolve the request promise
    this.unsubscribeHandleResponseMessage = this.subscribe(
      MessageType.Response,
      this.handleResponseMessage,
    );

    // Listen for requests from the clients and run the request handler
    this.unsubscribeHandleRequestMessage = this.subscribe(
      MessageType.Request,
      this.handleRequestMessage,
    );

    // Start the webSocket server
    this.webSocketServer = new WebSocketServer({ port: WEBSOCKET_PORT });
    this.webSocketServer.on('connection', this.onClientConnect);
    this.webSocketServer.on('close', this.disconnect);

    // Finished setting up server synchronously with this implementation.
    this.connectionStatus = ConnectionStatus.Connected;
    this.connectPromise = Promise.resolve(this.connectorInfo);

    return this.connectPromise;
  };

  // Don't need self here because there's nothing to do. This is just implementing the interface method as a placeholder for now
  // eslint-disable-next-line class-methods-use-this
  notifyClientConnected = async () => {
    // Don't think we need to do anything to tell the client that the server is ready
    return Promise.resolve();
  };

  disconnect = () => {
    this.connectionStatus = ConnectionStatus.Disconnected;
    this.localRequestHandler = undefined;
    this.connectPromise = undefined;

    // Disconnect all clients - this should clear clientSockets on its own
    [...this.clientSockets.values()].forEach((clientSocket) =>
      this.disconnectClient(clientSocket.webSocket),
    );

    if (this.webSocketServer) {
      this.webSocketServer.off('connection', this.onClientConnect);
      this.webSocketServer.off('close', this.disconnect);
      this.webSocketServer.close();
      this.webSocketServer = undefined;
    }

    if (this.unsubscribeHandleClientConnectMessage)
      this.unsubscribeHandleClientConnectMessage();
    if (this.unsubscribeHandleResponseMessage)
      this.unsubscribeHandleResponseMessage();
    if (this.unsubscribeHandleRequestMessage)
      this.unsubscribeHandleRequestMessage();
  };

  request = async <TParam, TReturn>(
    requestType: string,
    request: InternalRequest<TParam>,
  ) => {
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
      this.connectorInfo.clientId,
    );

    return requestPromise;
  };

  // #endregion

  // #region private methods

  /** Get the client socket for a certain clientId. Throws if not found */
  private getClientSocket = (clientId: number): WebSocketClient => {
    if (!this.webSocketServer)
      throw new Error('Trying to get client socket when not connected!');

    const clientSocket = this.clientSockets.get(clientId);

    if (!clientSocket)
      throw new Error(
        `Trying to get client socket ${clientId} but it does not exist!`,
      );

    return clientSocket;
  };

  /** Get the clientId for a certain webSocket. Throws if not found */
  private getClientIdFromSocket = (webSocket: WebSocket): number => {
    // Using for...of on iterator here because it is significantly faster (not converting to array first) and cleaner this way in this case
    // eslint-disable-next-line no-restricted-syntax
    for (const [clientId, clientSocket] of this.clientSockets.entries())
      if (clientSocket.webSocket === webSocket) return clientId;
    throw new Error('Could not find clientId for webSocket');
  };

  /**
   * Send a message to a client via webSocket. Throws if not connected
   * @param message message to send
   * @param recipientId the client to which to send the message. TODO: determine if we can intuit this instead
   */
  // Add if needed: @param unsafe whether to get the client even if we aren't connected. WARNING: SETTING THIS FLAG MEANS NOT CHECKING FOR INITIALIZATION. DO NOT USE OUTSIDE OF INITIALIZATION. There may be no clientId
  private sendMessage = (message: Message, recipientId: number): void => {
    // TODO: add message queueing
    if (
      this.connectionStatus !== ConnectionStatus.Connected ||
      !this.webSocketServer
    )
      throw new Error(
        `Trying to send message when not connected! Message ${message}`,
      );

    if (this.connectorInfo.clientId === recipientId) {
      // This message is from us and for us. Handle the message as if we just received it
      this.onMessage(
        {
          data: message as unknown as string,
        } as MessageEvent,
        true,
      );
    } else {
      // This message is for someone else. Send the message
      this.getClientSocket(recipientId).webSocket.send(JSON.stringify(message));
    }
  };

  /**
   * Receives and appropriately publishes webSocket messages
   * @param event webSocket message information
   * @param fromSelf whether this message is from this connector instead of from someone else
   */
  private onMessage = (event: MessageEvent, fromSelf = false) => {
    const data = fromSelf
      ? (event.data as unknown as Message)
      : (JSON.parse(event.data as string) as Message);

    // Make sure the client isn't impersonating another client
    // TODO: consider speeding up validation by passing in webSocket client id?
    const clientId = fromSelf
      ? this.connectorInfo.clientId
      : this.getClientIdFromSocket(event.target);
    if (data.senderId !== clientId)
      throw new Error(
        `Received message from webSocket ${clientId} but did not match indicated message sender id ${data.senderId}`,
      );

    const callbacks = this.messageSubscriptions.get(data.type);
    callbacks?.forEach((callback) => callback(data, clientId));
  };

  /**
   * Unsubscribes a function from running on webSocket messages
   * @param messageType the type of message from which to unsubscribe the function
   * @param callback function to unsubscribe from being run on webSocket messages.
   * @returns true if successfully unsubscribed
   * Likely will never need to be exported from this file. Just use subscribe, which returns a matching unsubscriber function that runs this.
   */
  private unsubscribe = (
    messageType: MessageType,
    callback: (eventData: Message, clientId: number) => void,
  ): boolean => {
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
  };

  /**
   * Subscribes a function to run on webSocket messages of a particular type
   * @param messageType the type of message on which to subscribe the function
   * @param callback function to run with the contents of the webSocket message
   * @returns unsubscriber function to run to stop calling the passed-in function on webSocket messages
   */
  private subscribe = (
    messageType: MessageType,
    // Any is here because I dunno how to narrow Message type to a specific message type in parameters of a function
    // TODO: investigate this further another time
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: (eventData: Message | any, clientId: number) => void,
  ): Unsubscriber => {
    let callbacks = this.messageSubscriptions.get(messageType);
    if (!callbacks) {
      callbacks = [];
      this.messageSubscriptions.set(messageType, callbacks);
    }
    callbacks.push(callback);

    return () => this.unsubscribe(messageType, callback);
  };

  /**
   * Registers an incoming webSocket connection and sends connection info with InitClient.
   * Does not consider the client fully connected yet until they respond and tell us they connected with ClientConnect
   */
  private onClientConnect = (webSocket: WebSocket) => {
    const clientId = this.nextClientId;
    this.nextClientId += 1;

    // TODO: probably do something better than just print the error
    webSocket.addEventListener('error', logger.error);

    webSocket.addEventListener('message', this.onMessage);
    webSocket.addEventListener('close', this.onClientDisconnect);

    /** This clientSocket's connector info */
    const connectorInfo: NetworkConnectorInfo = { clientId };

    // Add the client socket to the list
    this.clientSockets.set(clientId, {
      webSocket,
      connectorInfo,
      connected: false,
    });

    // Send initclient to let the client know its connectorInfo
    this.sendMessage(
      {
        type: MessageType.InitClient,
        senderId: this.connectorInfo.clientId,
        connectorInfo,
      },
      clientId,
    );
  };

  /** Handles when client connection disconnects. Unregisters and such */
  private onClientDisconnect = (event: CloseEvent) => {
    this.disconnectClient(event.target);
  };

  /** Closes connection and unregisters a client webSocket when it has disconnected */
  private disconnectClient = (webSocket: WebSocket) => {
    const clientId = this.getClientIdFromSocket(webSocket);
    webSocket.removeEventListener('error', logger.error);
    webSocket.removeEventListener('message', this.onMessage);
    webSocket.removeEventListener('close', this.onClientDisconnect);
    webSocket.close();
    this.clientSockets.delete(clientId);
  };

  /**
   * Function that handles webSocket messages of type Response.
   * Resolves the request associated with the received response message or forwards to appropriate client
   * @param response Response message to resolve
   * @param responderId responding client
   */
  private handleResponseMessage = (
    response: WebSocketResponse<unknown>,
    responderId: number,
  ) => {
    const { requesterId, requestId } = response;
    if (this.connectorInfo.clientId === requesterId) {
      // This response is for us. Resolve the associated request
      const liveRequest = this.requests.get(requestId);
      if (!liveRequest)
        throw new Error(
          `Received response from responder senderId ${responderId} for nonexistent requestId ${requestId}`,
        );

      // Remove the request from the requests because it is receiving a response
      this.requests.delete(requestId);

      // Run the request's response function with the response
      liveRequest.resolve(response);
    } else {
      // This response is for someone else. Forward the response on
      this.sendMessage(response, requesterId);
    }
  };

  /**
   * Function that handles incoming webSocket messages and locally sent messages of type Request.
   * Handles the request and sends a response if we have a handler or forwards to the appropriate client
   * @param requestMessage request to handle
   * @param requesterId who sent this message
   */
  private handleRequestMessage = async (
    requestMessage: WebSocketRequest<unknown>,
    requesterId: number,
  ) => {
    if (!this.requestRouter)
      throw new Error(
        `Received a request but cannot route it without a requestRouter`,
      );

    // Figure out if we can handle this request or if we need to send it
    const responderId = this.requestRouter(requestMessage.requestType);
    if (this.connectorInfo.clientId === responderId) {
      // This request is ours. Handle the request
      if (!this.localRequestHandler)
        throw Error('Handling request without a requestHandler!');

      // Run the request handler for this request
      const response = await this.localRequestHandler(
        requestMessage.requestType,
        requestMessage,
      );

      // Send the response to this request
      this.sendMessage(
        {
          type: MessageType.Response,
          requestType: requestMessage.requestType,
          ...response,
        },
        requesterId,
      );
    } else {
      // This request is for someone else. Forward the request on
      this.sendMessage(requestMessage, responderId);
    }
  };

  // #endregion
}
