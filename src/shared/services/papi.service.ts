/**
 * Unified module for accessing API features in extensions
 */

import * as commandService from '@shared/services/command.service';
import { papiExports } from '@shared/services/network.service';
import * as papiUtil from '@shared/utils/papi-util';
// We need the WebViewService here to include on the papi, but WebViewService passes papi into WebViews
// eslint-disable-next-line import/no-cycle
import * as webViewService from '@shared/services/web-view.service';
import PEventEmitter from '@shared/models/p-event-emitter.model';
import logger from '@shared/services/logger.service';
import { isRenderer } from '@shared/utils/internal-util';
import internetService from '@shared/services/internet.service';

// TODO: Fix these to use NormalModuleReplacementPlugin or something https://webpack.js.org/plugins/normal-module-replacement-plugin/
const papiComponents = isRenderer() ? require('@renderer/components/papi-components').default : {};
const papiContext = isRenderer() ? require('@renderer/context/papi-context').default : {};
const papiHooks = isRenderer() ? require('@renderer/hooks/papi-hooks').default : {};

export default {
  // Classes
  PEventEmitter,

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
  network: papiExports,
  logger,
  internet: internetService,
};

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
