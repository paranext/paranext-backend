import papi, { logger, projectLookup } from '@papi/backend';
import {
  GetWebViewOptions,
  IWebViewProvider,
  SavedWebViewDefinition,
  WebViewDefinition,
} from '@papi/core';
import { formatReplacementString } from 'platform-bible-utils';
import checkingResultsListWebView from './checking-results-list.web-view?inline';
import checkingResultsListStyles from './checking-results-list.web-view.scss?inline';

export const checkResultsListWebViewType = 'platformScripture.checkingResults';

export interface CheckResultsWebViewOptions extends GetWebViewOptions {
  /** Id of the editor web view that opened this results list */
  editorWebViewId?: string | undefined;
  projectId: string | undefined;
}

export default class CheckResultsWebViewProvider implements IWebViewProvider {
  constructor(public webViewType: string = checkResultsListWebViewType) {}

  async getWebView(
    savedWebView: SavedWebViewDefinition,
    getWebViewOptions: CheckResultsWebViewOptions,
  ): Promise<WebViewDefinition | undefined> {
    if (savedWebView.webViewType !== this.webViewType)
      throw new Error(
        `${checkResultsListWebViewType} provider received request to provide a ${savedWebView.webViewType} web view`,
      );

    // We know that the projectId (if present in the state) will be a string.
    let projectId = getWebViewOptions.projectId || savedWebView.projectId || undefined;

    let projectName: string | undefined;

    if (projectId) {
      const pdp = await papi.projectDataProviders.get('platform.base', projectId);
      projectName = (await pdp.getSetting('platform.name')) ?? projectId;
    }

    const title = formatReplacementString(
      await papi.localization.getLocalizedString({
        localizeKey: '%webView_checkResultsList_title%',
      }),
      {
        resultsCount: '0',
        projectName,
      },
    );

    if (!projectId && globalThis.isNoisyDevModeEnabled) {
      logger.debug(`${title} web view did not get a project passed in. Choosing a random one...`);

      const projectMetadata = await projectLookup.getMetadataForAllProjects();
      if (projectMetadata.length === 0) {
        logger.debug('Testing out checks: No projects available');
        return undefined;
      }
      projectId = projectMetadata[0].id;
    }

    logger.info(`${title} web view opening with ${projectId}`);

    return {
      ...savedWebView,
      title,
      projectId,
      content: checkingResultsListWebView,
      styles: checkingResultsListStyles,
      state: {
        ...savedWebView.state,
        webViewType: this.webViewType,
        editorWebViewId: getWebViewOptions.editorWebViewId ?? savedWebView.state?.editorWebViewId,
      },
    };
  }
}
