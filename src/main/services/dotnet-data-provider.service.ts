import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import path from 'path';
import logger, { formatLog } from '@shared/services/logger.service';
import { waitForDuration } from '@shared/utils/util';

/** Pretty name for the process this service manages. Used in logs */
const DOTNET_DATA_PROVIDER_NAME = 'dotnet data provider';

let dotnet: ChildProcessWithoutNullStreams | undefined;

let resolveClose: (value: void | PromiseLike<void>) => void;
const closePromise: Promise<void> = new Promise<void>((resolve) => {
  resolveClose = resolve;
});

// log functions for inside the data provider process
function logProcessError(message: unknown) {
  logger.error(formatLog(message?.toString() || '', DOTNET_DATA_PROVIDER_NAME, 'error'));
}
function logProcessInfo(message: unknown) {
  logger.info(formatLog(message?.toString() || '', DOTNET_DATA_PROVIDER_NAME));
}

/**
 * Hard kills the Dotnet Data Provider.
 * TODO: add a more elegant shutdown to avoid this if we possibly can
 */
function killDotnetDataProvider() {
  if (!dotnet) return;

  if (dotnet.kill()) {
    logger.info('killed dotnet data provider');
  } else {
    logger.error('dotnet data provider was not stopped! Investigate other .kill() options');
  }
  dotnet = undefined;
}

async function waitForDotnetDataProvider(maxWaitTimeInMS: number) {
  const didClose = await waitForDuration(async () => {
    await closePromise;
    return true;
  }, maxWaitTimeInMS);

  if (!didClose) killDotnetDataProvider();
}

/**
 * Starts the Dotnet Data Provider if it isn't already running.
 */
function startDotnetDataProvider() {
  if (dotnet) return;

  // default values for development
  let command = 'dotnet';
  let args: string[] = ['watch', '--project', 'c-sharp/ParanextDataProvider.csproj'];

  if (process.env.NODE_ENV === 'production') {
    if (process.platform === 'win32') {
      command = path.join(process.resourcesPath, 'dotnet', 'ParanextDataProvider.exe');
      args = [];
    } else {
      command = path.join(process.resourcesPath, 'dotnet', 'ParanextDataProvider');
      args = [];
    }
  }

  dotnet = spawn(command, args);

  dotnet.stdout.on('data', logProcessInfo);
  dotnet.stderr.on('data', logProcessError);

  dotnet.on('close', (code, signal) => {
    // In production, this handles the closing of the data provider. However, in development,
    // this is handling the closing of the dotnet watcher.
    if (signal) {
      logger.info(`'close' event: dotnet data provider terminated with signal ${signal}`);
    } else {
      logger.info(`'close' event: dotnet data provider exited with code ${code}`);
    }
    // TODO: listen for 'exit' event as well?
    // TODO: unsubscribe event listeners
    dotnet = undefined;
    resolveClose();
  });
}

const dotnetDataProvider = {
  start: startDotnetDataProvider,
  kill: killDotnetDataProvider,
  wait: waitForDotnetDataProvider,
};
export default dotnetDataProvider;
