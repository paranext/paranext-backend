/**
 * Handles requests, responses, subscriptions, etc. to the backend.
 * Likely shouldn't need/want to expose this whole service on papi,
 * but there are a few things that are exposed via papiNetworkService
 */

import {
  ClientConnectEvent,
  ClientDisconnectEvent,
  CLIENT_ID_SERVER,
  NetworkEventHandler,
  RequestHandler,
  RequestRouter,
} from '@shared/data/internal-connection.model';
import {
  aggregateUnsubscriberAsyncs,
  CommandHandler,
  ComplexRequest,
  ComplexResponse,
  createSafeRegisterFn,
  RequestHandlerType,
  serializeRequestType,
  UnsubscriberAsync,
} from '@shared/utils/papi-util';
import { getErrorMessage, wait } from '@shared/utils/util';
import * as connectionService from '@shared/services/connection.service';
import { isClient, isRenderer, isServer } from '@shared/utils/internal-util';
import logger from '@shared/services/logger.service';
import PapiNetworkEventEmitter from '@shared/models/papi-network-event-emitter.model';
import PapiEventEmitter from '@shared/models/papi-event-emitter.model';
import { PapiEvent } from '@shared/models/papi-event.model';

/** Prefix on requests that indicates that the request is related to server operations */
const CATEGORY_SERVER = 'server';
/** Prefix on events that indicates that the event is related to the network */
const CATEGORY_NETWORK = 'network';

/** Whether this service has finished setting up */
let isInitialized = false;

/** Promise that resolves when this service is finished initializing */
let initializePromise: Promise<void> | undefined;

/** Map of requestType to registered handler for that request or (on server) information about which connection to send the request */
const requestRegistrations = new Map<string, RequestRegistration>();

/**
 * Map from event type to the emitter for that type as well as if that emitter is "registered" aka one
 * reference to that emitter has been provided somewhere such that that event can be emitted from that one place.
 * NetworkEventEmitter types should not occur multiple times so extensions cannot emit events they
 * shouldn't, so we have a quick and easy no sharing in process rule in createNetworkEventEmitter.
 * TODO: sync these between processes
 */
const networkEventEmitters = new Map<
  string,
  { emitter: PapiNetworkEventEmitter<unknown>; isRegistered: boolean }
>();

/** Request handler that is a local function and can be handled locally */
type LocalRequestRegistration<TParam, TReturn> = {
  registrationType: 'local';
  requestType: string;
  handlerType: RequestHandlerType;
  handler: RoutedRequestHandler<TParam, TReturn> | RoutedRequestHandler<TParam[], TReturn>;
};

/** Request handler that is not on this network service and must be requested on the network. Server-only as clients will all just send to the server */
type RemoteRequestRegistration = {
  registrationType: 'remote';
  requestType: string;
  clientId: number;
};

/** Information about the request handler and how to run it */
// Any is probably fine because we likely never know or care about the args or return
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RequestRegistration<TParam = any, TReturn = any> =
  | LocalRequestRegistration<TParam, TReturn>
  | RemoteRequestRegistration;

/**
 * Args handler function for a request. Called when a request is handled.
 * The function should accept the spread of the contents array of the request as its parameters.
 * The function should return an object that becomes the contents object of the response.
 * This type of handler is a normal function.
 */
type ArgsRequestHandler<
  // Any is probably fine because we likely never know or care about the args or return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TParam extends Array<unknown> = any[],
  // Any is probably fine because we likely never know or care about the args or return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TReturn = any,
> = CommandHandler<TParam, TReturn>;

/**
 * Contents handler function for a request. Called when a request is handled.
 * The function should accept the contents object of the request as its single parameter.
 * The function should return an object that becomes the contents object of the response.
 */
// Any is probably fine because we likely never know or care about the args or return
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ContentsRequestHandler<TParam = any, TReturn = any> = (contents: TParam) => Promise<TReturn>;

/**
 * Complex handler function for a request. Called when a request is handled.
 * The function should accept a ComplexRequest object as its single parameter.
 * The function should return a ComplexResponse object that becomes the response..
 * This type of handler is the most flexible of the request handlers.
 */
// Any is probably fine because we likely never know or care about the args or return
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComplexRequestHandler<TParam = any, TReturn = any> = (
  request: ComplexRequest<TParam>,
) => Promise<ComplexResponse<TReturn>>;

/** Handler function for a request */
// Any is probably fine because we likely never know or care about the args or return
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RoutedRequestHandler<TParam = any, TReturn = any> =
  | ArgsRequestHandler<TParam[], TReturn>
  | ContentsRequestHandler<TParam, TReturn>
  | ComplexRequestHandler<TParam, TReturn>;

// #region Private unsafe functions (do not call manually outside of initialization)

/**
 * Send a request to the server and resolve a ComplexResponse after receiving a response.
 *
 * Note: Unless you need access to ComplexResponse properties, you probably just want to use request
 *
 * WARNING: THIS THROWS IF NOT INITIALIZED. DO NOT USE OUTSIDE OF INITIALIZATION. Use requestRaw
 * @param requestType the type of request
 * @param contents contents to send in the request
 * @returns promise that resolves with the response message
 */
const requestRawUnsafe = async <TParam, TReturn>(
  requestType: string,
  contents: TParam,
): Promise<ComplexResponse<TReturn>> => {
  if (!isInitialized)
    throw new Error(
      `Cannot perform raw request ${requestType} as the NetworkService is not initialized`,
    );

  // https://github.com/paranext/paranext-core/issues/51
  // If the request type doesn't have a registered handler yet, retry a few times to help with race conditions
  // This approach is hacky but works well enough for now
  const expectedErrorMsg: string = `No handler was found to process the request of type ${requestType}`;
  const maxAttempts: number = 5;
  for (let attemptsRemaining = maxAttempts; attemptsRemaining > 0; attemptsRemaining--) {
    // eslint-disable-next-line no-await-in-loop
    const response = await connectionService.request<TParam, TReturn>(requestType, contents);
    if (response.success || attemptsRemaining === 1 || response.errorMessage !== expectedErrorMsg)
      return response;

    // eslint-disable-next-line no-await-in-loop
    await wait(1000);

    logger.debug(`Retrying network service request of type ${requestType}`);
  }

  throw new Error(`Raw request ${requestType} failed`);
};

/**
 * Send a request on the network and resolve the response contents.
 *
 * WARNING: THIS THROWS IF NOT INITIALIZED. DO NOT USE OUTSIDE OF INITIALIZATION. Use request
 * @param requestType the type of request
 * @param args arguments to send in the request (put in request.contents)
 * @returns promise that resolves with the response message
 */
const requestUnsafe = async <TParam extends Array<unknown>, TReturn>(
  requestType: string,
  ...args: TParam
) => {
  if (!isInitialized)
    throw new Error(
      `Cannot perform request ${requestType} as the NetworkService is not initialized`,
    );
  const response = await requestRawUnsafe<TParam, TReturn>(requestType, args);
  if (!response.success) throw new Error(response.errorMessage);
  return response.contents;
};

/**
 * Unregisters a local request handler from running on requests.
 *
 * WARNING: DO NOT USE OUTSIDE OF INITIALIZATION. Use unregisterRequestHandler (not created yet as it may never be necessary)
 * @param requestType the type of request from which to unregister the handler
 * @param handler function to unregister from running on requests
 * @returns true if successfully unregistered, false if registration not found or trying to unregister a handler that is not local. Throws if provided handler is not the correct handler
 * Likely will never need to be exported from this file. Just use registerRequestHandler, which returns a matching unsubscriber function that runs this.
 */
async function unregisterRequestHandlerUnsafe(
  requestType: string,
  handler: RoutedRequestHandler,
): Promise<boolean> {
  const requestRegistration = requestRegistrations.get(requestType);

  if (!requestRegistration)
    // The request isn't registered locally
    // TODO: If you run the unsubscribe from registerRequestHandler before it resolves, you
    // may accidentally hit here before the handler is registered. That would be a memory
    // leak, I suppose. We should consider a better solution
    return false;

  if (requestRegistration.registrationType === 'remote')
    // The request handler is someone else's to unregister. Is this egregious enough that we should throw here? This only really happens if you're the server right now as the server holds remote handlers
    return false;

  if (requestRegistration.handler !== handler)
    // Somehow the handlers do not match. Probably can't happen unless you call this function directly which shouldn't happen. Is this egregious enough that we should throw? I guess...?
    throw new Error(`Handler to unsubscribe from ${requestType} does not match registered handler`);

  // Check with the server to make sure we can unregister this registration
  const remoteUnregisterSuccessful = isClient()
    ? await requestUnsafe(
        serializeRequestType(CATEGORY_SERVER, 'unregisterRequest'),
        requestType,
        connectionService.getClientId(),
      )
    : true;

  if (!remoteUnregisterSuccessful)
    // The server did not allow us to unregister
    return false;

  // We can unregister this handler! Remove it from the registrations
  requestRegistrations.delete(requestType);
  return true;
}

/**
 * Register a local request handler to run on requests.
 *
 * WARNING: DO NOT USE OUTSIDE OF INITIALIZATION. Use registerRequestHandler
 * @param requestType the type of request on which to register the handler
 * @param handler function to register to run on requests
 * @param handlerType type of handler function - indicates what type of parameters and what return type the handler has
 * @returns promise that resolves if the request successfully registered and unsubscriber function to run to stop the passed-in function from handling requests
 */
async function registerRequestHandlerUnsafe(
  requestType: string,
  handler: ArgsRequestHandler,
  handlerType?: RequestHandlerType,
): Promise<UnsubscriberAsync>;
async function registerRequestHandlerUnsafe(
  requestType: string,
  handler: ContentsRequestHandler,
  handlerType?: RequestHandlerType,
): Promise<UnsubscriberAsync>;
async function registerRequestHandlerUnsafe(
  requestType: string,
  handler: ComplexRequestHandler,
  handlerType?: RequestHandlerType,
): Promise<UnsubscriberAsync>;
async function registerRequestHandlerUnsafe(
  requestType: string,
  handler: RoutedRequestHandler,
  handlerType = RequestHandlerType.Args,
): Promise<UnsubscriberAsync> {
  // Only register the first handler provided for this request type
  // Check locally if we already have a handler for this requestType
  if (requestRegistrations.has(requestType)) {
    // This rejectRegistration before remoteRequest so we can reject the promise returned instead
    // of throwing an error is the only reason we can't just return remoteRequest and avoid all
    // the complication of holding promise resolve and reject and all this. Consider just
    // throwing an exception. That would mean you would have to check for registerRequestHandler
    // to throw exceptions in addition to .catch-ing its promise, but maybe it's worth it. Dunno
    throw Error(`requestType ${requestType} already has a local handler registered`);
  }

  // Check with the server if it already has a handler for this requestType
  if (isClient()) {
    // If we are the client, try to register with the server because server has all registrations
    await requestUnsafe(
      serializeRequestType(CATEGORY_SERVER, 'registerRequest'),
      requestType,
      connectionService.getClientId(),
    );
  }

  // We have successfully checked that this is the first registration for this requestType. Set up the handler
  requestRegistrations.set(requestType, {
    registrationType: 'local',
    requestType,
    handler,
    handlerType,
  });

  return () => unregisterRequestHandlerUnsafe(requestType, handler);
}

/**
 * Sends an event to other processes. Does NOT run the local event subscriptions
 * as they should be run by NetworkEventEmitter after sending on network.
 *
 * WARNING: THIS THROWS IF NOT INITIALIZED. DO NOT USE OUTSIDE OF INITIALIZATION. Use createNetworkEventEmitter
 * @param eventType unique network event type for coordinating between processes
 * @param event event to emit on the network
 */
const emitEventOnNetworkUnsafe = async <T>(eventType: string, event: T) => {
  if (!isInitialized)
    throw new Error(
      `Cannot emit event ${eventType} on network as the NetworkService is not initialized`,
    );
  await connectionService.emitEventOnNetwork(eventType, event);
};

/**
 * Removes a network event emitter.
 *
 * WARNING: DO NOT USE OUTSIDE OF createNetworkEventEmitterUnsafe.
 * This is internal only as it does not actually dispose of the emitter.
 * Use the emitter's dispose method, and it will automatically run this.
 * @param eventType type of network event emitter to remove
 * @returns true if successfully removed an emitter with the specified type, false otherwise
 */
const removeNetworkEventEmitterInternal = (eventType: string): boolean =>
  networkEventEmitters.delete(eventType);

/**
 * Creates an event emitter that works properly over the network.
 * Other processes receive this event when it is emitted.
 *
 * WARNING: You cannot emit events with complex types on the network.
 *
 * WARNING: DO NOT USE OUTSIDE OF INITIALIZATION. Use createNetworkEventEmitter
 * @param eventType unique network event type for coordinating between processes
 * @param emitOnNetwork the function to use to emit the event on the network. Defaults to emitEventOnNetworkUnsafe.
 *   Should only need to provide this in createNetworkEventEmitter to make this function safe.
 * @param register whether to register the emitter aka whether one reference to the emitter has been released
 *   and therefore the emitter should not be distributed anymore
 * @returns event emitter whose event works between processes
 */
const createNetworkEventEmitterUnsafe = <T>(
  eventType: string,
  emitOnNetwork = emitEventOnNetworkUnsafe,
  register = true,
): PapiEventEmitter<T> => {
  const existingEmitter = networkEventEmitters.get(eventType);
  if (existingEmitter) {
    if (existingEmitter.isRegistered)
      throw new Error(`type ${eventType} is already registered to a network event emitter`);
    existingEmitter.isRegistered = register;
    return existingEmitter.emitter as PapiEventEmitter<T>;
  }
  const newNetworkEventEmitter = new PapiNetworkEventEmitter<T>(
    (event) => emitOnNetwork(eventType, event),
    () => removeNetworkEventEmitterInternal(eventType),
  );
  networkEventEmitters.set(eventType, {
    emitter: newNetworkEventEmitter as PapiNetworkEventEmitter<unknown>,
    isRegistered: register,
  });
  return newNetworkEventEmitter;
};

// #endregion

// #region Server-only variables and functions

/**
 * Unregisters a client connection's request handler
 * SERVER-ONLY. This should not be needed on the client
 * @param requestType the type of request on which to unregister the handler
 * @param clientId clientId of the client who wants to unregister the handler
 * @returns true if successfully unregistered, false otherwise
 */
const unregisterRemoteRequestHandler = async (
  requestType: string,
  clientId: number,
): Promise<boolean> => {
  const requestRegistration = requestRegistrations.get(requestType);

  if (!requestRegistration)
    // The request isn't registered
    return false;

  if (requestRegistration.registrationType === 'local' || requestRegistration.clientId !== clientId)
    // The request handler is not theirs to unregister. Is this egregious enough that we should throw here?
    return false;

  // We can unregister this handler! Remove it from the registrations
  requestRegistrations.delete(requestType);
  return true;
};

/**
 * Registers a client connection's request handler
 * SERVER-ONLY. This should not be needed on the client
 * @param requestType the type of request on which to register the handler
 * @param clientId clientId of the client who wants to register the handler
 */
const registerRemoteRequestHandler = async (
  requestType: string,
  clientId: number,
): Promise<void> => {
  // TODO: Consider a good way to expose senderId in this scenario instead of just passing it as an argument.
  // Maybe create a registerRequestHandlerInternal function that uses InternalRequest and InternalResponse?

  // Check to see if there is already a handler for this requestType
  if (requestRegistrations.has(requestType)) {
    throw new Error(`requestType ${requestType} already has a remote handler registered`);
  }

  // Once we have checked that this is the first registration for this requestType, set up the handler
  requestRegistrations.set(requestType, {
    registrationType: 'remote',
    requestType,
    clientId,
  });
};

/**
 * Remove all requestRegistrations associated with a client.
 * SERVER-ONLY. Probably should only be run from ServerNetworkConnector.
 */
const handleClientDisconnect = ({ clientId }: ClientDisconnectEvent) => {
  // TODO: there will probably be something worth doing when a client gets disconnected in the future. Do that here instead of throwing
  if (connectionService.getClientId() === clientId)
    throw new Error(`NetworkService cannot disconnect itself! clientId: ${clientId}`);

  // Collect which registrations are for that clientId
  const requestTypesToRemove: string[] = [];
  requestRegistrations.forEach((requestRegistration) => {
    if (
      requestRegistration.registrationType === 'remote' &&
      requestRegistration.clientId === clientId
    )
      requestTypesToRemove.push(requestRegistration.requestType);
  });

  // Remove registrations for this clientId
  logger.info(`Client ${clientId} disconnected! Unregistering ${requestTypesToRemove.join(', ')}`);
  requestTypesToRemove.forEach((requestType) =>
    unregisterRemoteRequestHandler(requestType, clientId),
  );
};

/** Map of requestTypes to server-side handlers for those requests */
const serverRequestHandlers = {
  [serializeRequestType(CATEGORY_SERVER, 'registerRequest')]: registerRemoteRequestHandler,
  [serializeRequestType(CATEGORY_SERVER, 'unregisterRequest')]: unregisterRemoteRequestHandler,
};
/** Function that unsubscribes all the server request handlers */
let unsubscribeServerRequestHandlers: UnsubscriberAsync | undefined;

// #endregion

// #region functions passed down to INetworkConnector in initialize and helpers for those functions

/**
 * Calls the appropriate request handler according to the request type and returns a promise of the response
 * @param requestType type of request to handle
 * @param request the request to handle
 * @returns promise of response to the request
 */
const handleRequestLocal: RequestHandler = async <TParam, TReturn>(
  requestType: string,
  incomingRequest: ComplexRequest<TParam>,
): Promise<ComplexResponse<TReturn>> => {
  const registration = requestRegistrations.get(requestType);

  // Result should always be defined if success is true (and not defined if success is false), which seems to be the case in this function.
  // However, for some reason, TypeScript can't seem to tell that result is defined if success is true.
  // So we will just coerce it to start undefined but pretend it's TReturn.
  let result: TReturn = undefined as unknown as TReturn;
  let success = false;
  let errorMessage = '';

  if (!registration)
    // There is no handler registered for this request. Respond failure
    errorMessage = `No handler was found to process the request of type ${requestType}`;
  else if (registration.registrationType === 'remote')
    errorMessage = `Requested to handle local request but request ${requestType} is remote`;
  else
    switch (registration.handlerType) {
      case RequestHandlerType.Args:
        try {
          result = await (incomingRequest.contents
            ? (registration.handler as ArgsRequestHandler)(
                ...(incomingRequest.contents as unknown as unknown[]),
              )
            : (registration.handler as ArgsRequestHandler)());
          success = true;
        } catch (e) {
          errorMessage = getErrorMessage(e);
        }
        break;
      case RequestHandlerType.Contents:
        try {
          result = await (registration.handler as ContentsRequestHandler)(incomingRequest.contents);
          success = true;
        } catch (e) {
          errorMessage = getErrorMessage(e);
        }
        break;
      case RequestHandlerType.Complex: {
        try {
          const response = await (registration.handler as ComplexRequestHandler)(incomingRequest);
          // Break out the contents of the ComplexResponse to use existing variables. Should we destructure instead to future-proof for other fields? It was not playing well with Typescript
          success = response.success;
          if (response.success) result = response.contents;
          else errorMessage = response.errorMessage;
        } catch (e) {
          errorMessage = getErrorMessage(e);
        }
        break;
      }
      default:
        throw new Error(
          `RequestHandlerType.${registration.handlerType} not supported! On requestType ${requestType}`,
        );
    }

  if (!success && !errorMessage) {
    errorMessage = `The JS-handled request of type ${requestType} was not handled successfully`;
  }

  return {
    contents: result,
    success,
    errorMessage,
  };
};

/**
 * Determines the appropriate clientId to which to send requests of the given type
 * @param requestType type of request to determine which clientId will handle the request
 * @returns clientId that handles requests of the given type
 */
const routeRequest: RequestRouter = (requestType: string): number => {
  const registration = requestRegistrations.get(requestType);
  if (!registration)
    // We are the client and we need to send the request to the server or we are the server and we need to return an error
    return CLIENT_ID_SERVER;
  if (registration.registrationType === 'local')
    // We will handle this request here
    return connectionService.getClientId();
  // This registration is for another connection
  return registration.clientId;
};

/**
 * Emits the appropriate network event on this process according to the event type
 * @param eventType type of event to handle
 * @param event the event data to emit
 */
const handleEventFromNetwork: NetworkEventHandler = <T>(eventType: string, event: T) => {
  const emitter = networkEventEmitters.get(eventType);
  // TODO: register events so we only receive events we are listening for, then throw here if we get an event we are not listening for
  emitter?.emitter?.emitLocal(event);
};

// TODO: Why doesn't createNetworkEventEmitterUnsafe require that I specify a generic type? I can't figure it out.
/** Emitter for when clients connect. Provides clientId */
const onDidClientConnectEmitter = createNetworkEventEmitterUnsafe<ClientConnectEvent>(
  serializeRequestType(CATEGORY_NETWORK, 'onDidClientConnect'),
);
/** Event that emits with clientId when a client connects */
export const onDidClientConnect = onDidClientConnectEmitter.event;
/** Emitter for when clients disconnect. Provides clientId */
const onDidClientDisconnectEmitter = createNetworkEventEmitterUnsafe<ClientDisconnectEvent>(
  serializeRequestType(CATEGORY_NETWORK, 'onDidClientDisconnect'),
);
/** Event that emits with clientId when a client disconnects */
export const onDidClientDisconnect = onDidClientDisconnectEmitter.event;

// #endregion

/** Closes the network services gracefully */
export const shutdown = () => {
  connectionService.disconnect();
};

/** Sets up the NetworkService. Runs only once */
export const initialize = () => {
  if (initializePromise) return initializePromise;

  initializePromise = (async (): Promise<void> => {
    if (isInitialized) return;

    // Wait to connect to the server
    await connectionService.connect(
      handleRequestLocal,
      routeRequest,
      handleEventFromNetwork,
      // Only emit connector events as server because clients will get them from the server
      isServer()
        ? {
            didClientConnectHandler: onDidClientConnectEmitter.emit,
            didClientDisconnectHandler: onDidClientDisconnectEmitter.emit,
          }
        : {},
    );

    // Register server-only request handlers
    if (isServer()) {
      onDidClientDisconnect(handleClientDisconnect);

      const registrationUnsubscribers = Object.entries(serverRequestHandlers).map(
        ([requestType, handler]) => registerRequestHandlerUnsafe(requestType, handler),
      );
      // Wait to successfully register all requests
      unsubscribeServerRequestHandlers = aggregateUnsubscriberAsyncs(
        await Promise.all(registrationUnsubscribers),
      );
    }

    // On closing, try to close the connection
    // TODO: should do this on the server when the connection closes or when the server exists as well
    if (isRenderer())
      window.addEventListener('beforeunload', async () => {
        connectionService.disconnect();
        if (unsubscribeServerRequestHandlers) unsubscribeServerRequestHandlers();
      });

    isInitialized = true;
  })();

  return initializePromise;
};

// #region Public safe functions (call these, not the private unsafe functions above)

/**
 * Send a request on the network and resolve the response contents.
 * @param requestType the type of request
 * @param args arguments to send in the request (put in request.contents)
 * @returns promise that resolves with the response message
 */
export const request = async <TParam extends Array<unknown>, TReturn>(
  requestType: string,
  ...args: TParam
) => {
  await initialize();
  return requestUnsafe<TParam, TReturn>(requestType, ...args);
};

/** Helper function so we can overload registerRequestHandler */
const registerRequestHandlerInternal = createSafeRegisterFn(
  registerRequestHandlerUnsafe,
  isInitialized,
  initialize,
);
/**
 * Register a local request handler to run on requests.
 * @param requestType the type of request on which to register the handler
 * @param handler function to register to run on requests
 * @param handlerType type of handler function - indicates what type of parameters and what return type the handler has
 * @returns promise that resolves if the request successfully registered and unsubscriber function to run to stop the passed-in function from handling requests
 */
export function registerRequestHandler(
  requestType: string,
  handler: ArgsRequestHandler,
  handlerType?: RequestHandlerType,
): Promise<UnsubscriberAsync>;
export function registerRequestHandler(
  requestType: string,
  handler: ContentsRequestHandler,
  handlerType?: RequestHandlerType,
): Promise<UnsubscriberAsync>;
export function registerRequestHandler(
  requestType: string,
  handler: ComplexRequestHandler,
  handlerType?: RequestHandlerType,
): Promise<UnsubscriberAsync>;
export function registerRequestHandler(
  requestType: string,
  handler: RoutedRequestHandler,
  handlerType = RequestHandlerType.Args,
): Promise<UnsubscriberAsync> {
  return registerRequestHandlerInternal(requestType, handler, handlerType);
}

/**
 * Sends an event to other connections. Does NOT run the local event subscriptions
 * as they should be run by NetworkEventEmitter after sending on network.
 * @param eventType unique network event type for coordinating between connections
 * @param event event to emit on the network
 */
const emitEventOnNetwork = async <T>(eventType: string, event: T) => {
  await initialize();
  return emitEventOnNetworkUnsafe(eventType, event);
};

/**
 * Creates an event emitter that works properly over the network.
 * Other connections receive this event when it is emitted.
 *
 * WARNING: You can only create a network event emitter once per eventType to prevent hijacked event emitters.
 *
 * WARNING: You cannot emit events with complex types on the network.
 * @param eventType unique network event type for coordinating between connections
 * @returns event emitter whose event works between connections
 */
export const createNetworkEventEmitter = <T>(eventType: string): PapiEventEmitter<T> =>
  // Note: running createNetworkEventEmitterUnsafe without initializing is not technically an initialization
  // problem. However, emitting a network event before initializing is. As such, we create an emitter here
  // without awaiting initialization, but we pass in emitEventOnNetwork, which does wait for initialization.
  createNetworkEventEmitterUnsafe(eventType, emitEventOnNetwork);

/**
 * Gets the network event with the specified type. Creates the emitter if it does not exist
 * @param eventType unique network event type for coordinating between connections
 * @returns event for the event type that runs the callback provided when the event is emitted
 */
export const getNetworkEvent = <T>(eventType: string): PapiEvent<T> => {
  const existingEmitter = networkEventEmitters.get(eventType);
  if (existingEmitter) return existingEmitter.emitter.event as PapiEvent<T>;
  // We didn't find an existing emitter, so create one but don't mark it as registered because you can't emit the event from this function
  return createNetworkEventEmitterUnsafe(eventType, emitEventOnNetwork, false)
    .event as PapiEvent<T>;
};

// #endregion

/**
 * Creates a function that is a request function with a baked requestType.
 * This is also nice because you get TypeScript type support using this function.
 * @param requestType requestType for request function
 * @returns function to call with arguments of request that performs the request and resolves with the response contents
 */
export const createRequestFunction = <TParam extends Array<unknown>, TReturn>(
  requestType: string,
) => {
  return async (...args: TParam) => request<TParam, TReturn>(requestType, ...args);
};

// Declare an interface for the object we're exporting so that JSDoc comments propagate
export interface PapiNetworkService {
  onDidClientConnect: typeof onDidClientConnect;
  onDidClientDisconnect: typeof onDidClientDisconnect;
  createNetworkEventEmitter: typeof createNetworkEventEmitter;
  getNetworkEvent: typeof getNetworkEvent;
}

/** All the exports in this service that are to be exposed on the PAPI */
export const papiNetworkService: PapiNetworkService = {
  onDidClientConnect,
  onDidClientDisconnect,
  createNetworkEventEmitter,
  getNetworkEvent,
};
