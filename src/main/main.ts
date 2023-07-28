/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain, IpcMainInvokeEvent } from 'electron';
// Removed until we have a release. See https://github.com/paranext/paranext-core/issues/83
/* import { autoUpdater } from 'electron-updater'; */
import windowStateKeeper from 'electron-window-state';
import '@main/global-this.model';
import dotnetDataProvider from '@main/services/dotnet-data-provider.service';
import logger from '@shared/services/logger.service';
import * as networkService from '@shared/services/network.service';
import * as commandService from '@shared/services/command.service';
import { resolveHtmlPath } from '@node/utils/util';
import extensionHostService from '@main/services/extension-host.service';
import networkObjectService from '@shared/services/network-object.service';
import extensionAssetProtocolService from '@main/services/extension-asset-protocol.service';
import { wait } from '@shared/utils/util';
import { CommandNames } from 'papi-commands';
import { SerializedRequestType } from '@shared/utils/papi-util';

const PROCESS_CLOSE_TIME_OUT = 2000;

// `main.ts`'s command handler declarations are in `command.service.ts` so they can be picked up
// by papi-dts
// This map should allow any functions because commands can be any function type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const commandHandlers: { [commandName: string]: (...args: any[]) => any } = {
  'test.echo': async (message: string) => {
    return message;
  },
  'test.echoRenderer': async (message: string) => {
    /* const start = performance.now(); */
    /* const result =  */ await commandService.sendCommand('test.addThree', 1, 4, 9);
    /* logger.info(
      `test.addThree(...) = ${result} took ${performance.now() - start} ms`,
    ); */
    return message;
  },
  'test.echoExtensionHost': async (message: string) => {
    await commandService.sendCommand('test.addMany', 3, 5, 7, 1, 4);
    return message;
  },
  'test.throwError': async (message: string) => {
    throw new Error(`Test Error thrown in throwError command: ${message}`);
  },
  'platform.restartExtensionHost': async () => {
    restartExtensionHost();
  },
  'platform.quit': async () => {
    app.quit();
  },
};

async function main() {
  // The network service relies on nothing else, and other things rely on it, so start it first
  await networkService.initialize();

  // The .NET data provider relies on the network service and nothing else
  dotnetDataProvider.start();

  // TODO (maybe): Wait for signal from the .NET data provider process that it is ready

  // The extension host service relies on the network service.
  // Extensions inside the extension host might rely on the .NET data provider and each other
  // Some extensions inside the extension host rely on the renderer to accept 'getWebView' commands.
  // The renderer relies on the extension host, so something has to break the dependency loop.
  // For now, the dependency loop is broken by retrying 'getWebView' in a loop for a while.
  extensionHostService.start();

  // TODO (maybe): Wait for signal from the extension host process that it is ready (except 'getWebView')
  // We could then wait for the renderer to be ready and signal the extension host

  // Extension host test
  setTimeout(async () => {
    logger.info(
      `Add Many (from EH): ${await commandService.sendCommand('test.addMany', 2, 5, 9, 7)}`,
    );
  }, 20000);

  // #region Start the renderer

  // Removed until we have a release. See https://github.com/paranext/paranext-core/issues/83
  /* class AppUpdater {
  constructor() {
    autoUpdater.logger = logger;
    autoUpdater.checkForUpdatesAndNotify();
  }
} */

  // Keep a global reference of the window object. If you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let mainWindow: BrowserWindow | null = null;

  if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line global-require
    const sourceMapSupport = require('source-map-support');
    sourceMapSupport.install();
  }

  const isDebug = process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

  if (isDebug) {
    // eslint-disable-next-line global-require
    require('electron-debug')();
  }

  /** Install extensions into the Chromium renderer process */
  const installExtensions = async () => {
    // eslint-disable-next-line global-require
    const installer = require('electron-devtools-installer');
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = ['REACT_DEVELOPER_TOOLS'];

    return installer
      .default(
        extensions.map((name) => installer[name]),
        forceDownload,
      )
      .catch(logger.info);
  };

  const getAssetPath = (...paths: string[]): string => {
    return path.join(globalThis.resourcesPath, 'assets', ...paths);
  };

  /** Sets up the electron BrowserWindow renderer process */
  const createWindow = async () => {
    if (isDebug) {
      await installExtensions();
    }

    // Load the previous state with fallback to defaults
    const mainWindowState = windowStateKeeper({
      defaultWidth: 1024,
      defaultHeight: 728,
    });

    mainWindow = new BrowserWindow({
      show: false,
      x: mainWindowState.x,
      y: mainWindowState.y,
      width: mainWindowState.width,
      height: mainWindowState.height,
      icon: getAssetPath('icon.png'),
      webPreferences: {
        preload: app.isPackaged
          ? path.join(__dirname, 'preload.js')
          : path.join(__dirname, '../../.erb/dll/preload.js'),
      },
    });

    // Set our custom protocol handler to load assets from extensions
    extensionAssetProtocolService.initialize();

    // Register listeners on the window, so the state is updated automatically
    // (the listeners will be removed when the window is closed)
    // and restore the maximized or full screen state
    mainWindowState.manage(mainWindow);

    mainWindow.loadURL(resolveHtmlPath('index.html'));

    mainWindow.on('ready-to-show', () => {
      if (!mainWindow) {
        throw new Error('"mainWindow" is not defined');
      }
      if (process.env.START_MINIMIZED) {
        mainWindow.minimize();
      } else {
        mainWindow.show();
      }
    });

    mainWindow.on('closed', () => {
      mainWindow = null;
    });

    mainWindow.setMenu(null);

    // Open urls in the user's browser
    mainWindow.webContents.setWindowOpenHandler((edata) => {
      shell.openExternal(edata.url);
      return { action: 'deny' };
    });

    // Remove this if your app does not use auto updates
    // eslint-disable-next-line
    // Removed until we have a release. See https://github.com/paranext/paranext-core/issues/83
    // new AppUpdater();
  };

  app.on('window-all-closed', () => {
    // Respect the OSX convention of having the application in memory even
    // after all windows have been closed
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  let isClosing = false;
  app.on('will-quit', async (e) => {
    if (!isClosing) {
      // Prevent closing before graceful shutdown is complete.
      // Also, in the future, this should allow a "are you sure?" dialog to display.
      e.preventDefault();
      isClosing = true;

      networkService.shutdown();
      await Promise.all([
        dotnetDataProvider.waitForClose(PROCESS_CLOSE_TIME_OUT),
        extensionHostService.waitForClose(PROCESS_CLOSE_TIME_OUT),
      ]);

      // In development, the dotnet watcher was killed so we have to wait here.
      if (process.env.NODE_ENV !== 'production') await wait(500);

      app.quit();
    } else {
      dotnetDataProvider.kill();
      extensionHostService.kill();
    }
  });

  /** Map from ipc channel to handler function. Use with ipcRenderer.invoke */
  const ipcHandlers: {
    [ipcChannel: string]: (
      event: IpcMainInvokeEvent,
      // We don't know the exact parameter types since ipc handlers can be anything
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...args: any[]
    ) => Promise<unknown> | unknown;
  } = {
    'electronAPI:env.test': (_event, message: string) => `From main.ts: test ${message}`,
  };

  app
    .whenReady()
    // eslint-disable-next-line promise/always-return
    .then(() => {
      // Set up ipc handlers
      Object.entries(ipcHandlers).forEach(([ipcChannel, ipcHandler]) =>
        ipcMain.handle(ipcChannel, ipcHandler),
      );

      createWindow();
      app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (mainWindow === null) createWindow();
      });

      return undefined;
    })
    .catch(logger.info);

  Object.entries(ipcHandlers).forEach(([ipcHandle, handler]) => {
    networkService.registerRequestHandler(
      ipcHandle as SerializedRequestType,
      async (...args: unknown[]) => handler({} as IpcMainInvokeEvent, ...args),
    );
  });

  // #endregion

  // #region Register test command handlers

  Object.entries(commandHandlers).forEach(([commandName, handler]) => {
    commandService.registerCommand(commandName as CommandNames, handler);
  });

  // #endregion

  // #region Test network objects

  const testMain = {
    doStuff: (stuff: string) => {
      const result = `testMain did stuff: ${stuff}!`;
      logger.info(result);
      return result;
    },
    dispose: () => {
      logger.info('testMain.dispose() ran in testMain');
      return Promise.resolve(true);
    },
  };

  const testMainDisposer = await networkObjectService.set('testMain', testMain);
  testMain.doStuff('main things');
  testMainDisposer.onDidDispose(() => {
    logger.info('testMain disposed in main message #1');
  });
  testMainDisposer.onDidDispose(() => {
    logger.info('testMain disposed in main message #2');
  });

  setTimeout(testMainDisposer.dispose, 20000);

  setTimeout(async () => {
    let testExtensionHost = await networkObjectService.get<{
      getVerse: () => Promise<string>;
    }>('testExtensionHost');
    if (testExtensionHost) {
      logger.info(`get verse: ${await testExtensionHost.getVerse()}`);
      testExtensionHost.onDidDispose(() => {
        logger.info('testExtensionHost disposed in main');
        testExtensionHost = undefined;
      });
    } else logger.error('Could not get testExtensionHost from main');
  }, 5000);

  // #endregion
}

async function restartExtensionHost() {
  await extensionHostService.waitForClose(PROCESS_CLOSE_TIME_OUT);
  extensionHostService.start();
}

(async () => {
  logger.info('Starting main');
  await main();
  logger.info('Main is complete');
})().catch(logger.error);
