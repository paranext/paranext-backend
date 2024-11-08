import {
  GetWebViewOptions,
  SavedWebViewDefinition,
  WebViewId,
  WebViewType,
} from '@shared/models/web-view.model';
import { Layout } from '@shared/models/docking-framework.model';
import { PlatformEvent } from 'platform-bible-utils';
import { serializeRequestType } from '@shared/utils/util';
import { WebViewControllers, WebViewControllerTypes } from 'papi-shared-types';
import { NetworkObject } from '@shared/models/network-object.model';
import networkObjectStatusService from '@shared/services/network-object-status.service';
import networkObjectService from '@shared/services/network-object.service';
import logger from '@shared/services/logger.service';

/**
 * JSDOC SOURCE papiWebViewService
 *
 * Service exposing various functions related to using webViews
 *
 * WebViews are iframes in the Platform.Bible UI into which extensions load frontend code, either
 * HTML or React components.
 */
export interface WebViewServiceType {
  /** Event that emits with webView info when a webView is added */
  onDidAddWebView: PlatformEvent<AddWebViewEvent>;

  /** Event that emits with webView info when a webView is updated */
  onDidUpdateWebView: PlatformEvent<UpdateWebViewEvent>;

  /** Event that emits with webView info when a webView is closed */
  onDidCloseWebView: PlatformEvent<CloseWebViewEvent>;

  /** @deprecated 6 November 2024. Renamed to {@link openWebView}. */
  getWebView: (
    webViewType: WebViewType,
    layout?: Layout,
    options?: GetWebViewOptions,
  ) => Promise<WebViewId | undefined>;

  /**
   * Creates a new web view or gets an existing one depending on if you request an existing one and
   * if the web view provider decides to give that existing one to you (it is up to the provider).
   *
   * @param webViewType Type of WebView to create
   * @param layout Information about where you want the web view to go. Defaults to adding as a tab
   * @param options Options that affect what this function does. For example, you can provide an
   *   existing web view ID to request an existing web view with that ID.
   * @returns Promise that resolves to the ID of the webview we got or undefined if the provider did
   *   not create a WebView for this request.
   * @throws If something went wrong like the provider for the webViewType was not found
   */
  openWebView: (
    webViewType: WebViewType,
    layout?: Layout,
    options?: GetWebViewOptions,
  ) => Promise<WebViewId | undefined>;

  /** @deprecated 6 November 2024. Renamed to {@link getOpenWebViewDefinition} */
  getSavedWebViewDefinition(webViewId: string): Promise<SavedWebViewDefinition | undefined>;

  /**
   * Gets the saved properties on the WebView definition with the specified ID
   *
   * Note: this only returns a representation of the current web view definition, not the actual web
   * view definition itself. Changing properties on the returned definition does not affect the
   * actual web view definition. You can possibly change the actual web view definition by calling
   * {@link WebViewServiceType.openWebView} with certain `options`, depending on what options the web
   * view provider has made available.
   *
   * @param webViewId The ID of the WebView whose saved properties to get
   * @returns Saved properties of the WebView definition with the specified ID or undefined if not
   *   found
   */
  getOpenWebViewDefinition(webViewId: string): Promise<SavedWebViewDefinition | undefined>;

  /**
   * Get an existing web view controller for an open web view.
   *
   * A Web View Controller is a network object that represents a web view and whose methods
   * facilitate communication between its associated web view and extensions that want to interact
   * with it.
   *
   * Web View Controllers are registered on the web view provider service.
   *
   * @param webViewType Type of webview controller you expect to get. If the web view controller's
   *   `webViewType` does not match this, an error will be thrown
   * @param webViewId Id of web view for which to get the corresponding web view controller if one
   *   exists
   * @returns Web view controller with the given name if one exists, undefined otherwise
   */
  getWebViewController<WebViewType extends WebViewControllerTypes>(
    webViewType: WebViewType,
    webViewId: string,
  ): Promise<NetworkObject<WebViewControllers[WebViewType]> | undefined>;
}

/** Prefix on requests that indicates that the request is related to webView operations */
const CATEGORY_WEB_VIEW = 'webView';

/** Suffix on network objects that indicates that the network object is a web view controller */
const WEB_VIEW_CONTROLLER_LABEL = 'webViewController';

/** Gets the id for the web view controller network object with the given name */
export const getWebViewControllerObjectId = (webViewId: string) =>
  `${WEB_VIEW_CONTROLLER_LABEL}${webViewId}`;

/** Network object type for web view controllers */
export const WEB_VIEW_CONTROLLER_OBJECT_TYPE = 'webViewController';

// See `WebViewServiceType` for explanation
export async function getWebViewController<WebViewType extends WebViewControllerTypes>(
  webViewType: WebViewType,
  webViewId: string,
): Promise<NetworkObject<WebViewControllers[WebViewType]> | undefined> {
  // Get the object id for this web view Controller name
  const webViewControllerObjectId = getWebViewControllerObjectId(webViewType);

  const webViewControllerDetails = await networkObjectStatusService.waitForNetworkObject(
    { id: webViewControllerObjectId },
    // Wait up to 20 seconds for the web view Controller to appear
    20000,
  );

  if (
    !webViewControllerDetails.attributes ||
    webViewControllerDetails.attributes.webViewType !== webViewType
  )
    throw new Error(
      `Found web view controller with network object id ${webViewControllerObjectId} for web view id ${webViewId}, but its type was not what was expected! Expected: ${webViewType}; received ${webViewControllerDetails.attributes?.webViewType}`,
    );

  const webViewController =
    await networkObjectService.get<WebViewControllers[WebViewType]>(webViewControllerObjectId);

  if (!webViewController) {
    logger.info(`No WebView Controller found for WebView id ${webViewId} (type ${webViewType})`);
    return undefined;
  }

  return webViewController;
}

/** Name to use when creating a network event that is fired when webViews are created */
export const EVENT_NAME_ON_DID_ADD_WEB_VIEW = serializeRequestType(
  CATEGORY_WEB_VIEW,
  'onDidAddWebView',
);

/** Event emitted when webViews are created */
export type AddWebViewEvent = {
  webView: SavedWebViewDefinition;
  layout: Layout;
};

/** Name to use when creating a network event that is fired when webViews are updated */
export const EVENT_NAME_ON_DID_UPDATE_WEB_VIEW = serializeRequestType(
  CATEGORY_WEB_VIEW,
  'onDidUpdateWebView',
);

/** Event emitted when webViews are updated */
export type UpdateWebViewEvent = {
  webView: SavedWebViewDefinition;
};

/** Name to use when creating a network event that is fired when webViews are closed */
export const EVENT_NAME_ON_DID_CLOSE_WEB_VIEW = serializeRequestType(
  CATEGORY_WEB_VIEW,
  'onDidCloseWebView',
);

/** Event emitted when webViews are closed */
export type CloseWebViewEvent = {
  webView: SavedWebViewDefinition;
};

export const NETWORK_OBJECT_NAME_WEB_VIEW_SERVICE = 'WebViewService';
