/**
 * Unified module for accessing API features in extensions.
 *
 * WARNING: DO NOT IMPORT papi IN ANY FILE THAT papi IMPORTS AND EXPOSES.
 */

import * as commandService from '@shared/services/command.service';
import { papiNetworkService } from '@shared/services/network.service';
import * as papiUtil from '@shared/utils/papi-util';
// We need the WebViewService here to include on the papi, but WebViewService passes papi into WebViews
// eslint-disable-next-line import/no-cycle
import * as webViewService from '@shared/services/web-view.service';
import PapiEventEmitter from '@shared/models/papi-event-emitter.model';
import logger from '@shared/services/logger.service';
import { isRenderer } from '@shared/utils/internal-util';
import internetService from '@shared/services/internet.service';
import dataProviderService from '@shared/services/data-provider.service';
import type { ExtensionFileService } from '@node/services/extension-file.service';
import type { PapiComponents } from '@renderer/components/papi-components';
import type { PapiContext } from '@renderer/context/papi-context';
import type { PapiHooks } from '@renderer/hooks/papi-hooks';

// TODO: Fix these to use NormalModuleReplacementPlugin or something https://webpack.js.org/plugins/normal-module-replacement-plugin/
const extensionFileService: ExtensionFileService = isRenderer()
  ? {}
  : require('@node/services/extension-file.service').default;
const papiComponents: PapiComponents = isRenderer()
  ? require('@renderer/components/papi-components').default
  : {};
const papiContext: PapiContext = isRenderer()
  ? require('@renderer/context/papi-context').default
  : {};
const papiHooks: PapiHooks = isRenderer() ? require('@renderer/hooks/papi-hooks').default : {};

const papi = {
  // Classes
  EventEmitter: PapiEventEmitter,

  // Functions
  fetch: internetService.fetch, // Alias for internet.fetch for easy access

  // Services/modules
  commands: commandService,
  util: papiUtil,
  webViews: webViewService,
  react: {
    components: papiComponents,
    context: papiContext,
    hooks: papiHooks,
  },
  network: papiNetworkService,
  logger,
  internet: internetService,
  dataProvider: dataProviderService,
  fileSystem: extensionFileService,
};
export default papi;

/**
 * Modules that someone might try to require in their extensions that we have similar apis for.
 * When an extension requires these modules, an error throws that lets them know about our similar api.
 */
export const MODULE_SIMILAR_APIS: Readonly<{
  [moduleName: string]: string | undefined;
}> = Object.freeze({
  http: 'fetch',
  https: 'fetch',
});
