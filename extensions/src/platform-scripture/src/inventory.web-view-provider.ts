import papi from '@papi/backend';
import {
  GetWebViewOptions,
  IWebViewProvider,
  SavedWebViewDefinition,
  WebViewDefinition,
} from '@papi/core';
import { LocalizeKey } from 'platform-bible-utils';
import inventoryWebView from './inventory.web-view?inline';
import inventoryWebViewStyles from './inventory.web-view.scss?inline';

export interface InventoryWebViewOptions extends GetWebViewOptions {
  projectId: string | undefined;
}

export default class InventoryWebViewProvider implements IWebViewProvider {
  constructor(
    public titleKey: LocalizeKey,
    public webViewType: string,
  ) {}

  async getWebView(
    savedWebView: SavedWebViewDefinition,
    getWebViewOptions: InventoryWebViewOptions,
  ): Promise<WebViewDefinition | undefined> {
    if (savedWebView.webViewType !== this.webViewType)
      throw new Error(
        `${this.webViewType} provider received request to provide a ${savedWebView.webViewType} web view`,
      );

    // We know that the projectId (if present in the state) will be a string.
    const projectId =
      getWebViewOptions.projectId ||
      // eslint-disable-next-line no-type-assertion/no-type-assertion
      (savedWebView.state?.projectId as string) ||
      undefined;

    const title: string = await papi.localization.getLocalizedString({
      localizeKey: this.titleKey,
    });

    return {
      title,
      ...savedWebView,
      content: inventoryWebView,
      styles: inventoryWebViewStyles,
      state: {
        ...savedWebView.state,
        projectId,
        webViewType: this.webViewType,
      },
    };
  }
}