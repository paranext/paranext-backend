import { isClient } from '@shared/util/InternalUtil';
import * as NetworkService from '@shared/services/NetworkService';
import papi from '@shared/services/papi';
import { CommandHandler } from '@shared/util/PapiUtil';
import { ProcessType } from '@shared/globalThis';
import polyfillLocalStorage from '@node/polyfill/LocalStorage';

// #region command-line arguments

const isPackaged = process.argv.includes('--packaged');

// #endregion

// #region globalThis setup

globalThis.processType = ProcessType.ExtensionHost;
polyfillLocalStorage(isPackaged);

// #endregion

// #region Test logs

console.log('Hello from the extension host!');
console.log(`Extension host is${isClient() ? '' : ' not'} client`);
console.log(`Extension host process.type = ${process.type}`);
console.log(`Extension host process.env.NODE_ENV = ${process.env.NODE_ENV}`);

// #endregion

// #region Services setup

const commandHandlers: { [commandName: string]: CommandHandler } = {
  addMany: async (...nums: number[]) => {
    /* const start = performance.now(); */
    /* const result = await papi.commands.sendCommand('addThree', 1, 4, 9); */
    /* console.log(
      `addThree(...) = ${result} took ${performance.now() - start} ms`,
    ); */
    return nums.reduce((acc, current) => acc + current, 0);
  },
};

NetworkService.initialize()
  .then(() => {
    // Set up test handlers
    Object.entries(commandHandlers).forEach(([commandName, handler]) => {
      papi.commands.registerCommand(commandName, handler);
    });

    // TODO: Probably should return Promise.all of these registrations
    return undefined;
  })
  .catch((e) => console.error(e));

// #endregion

process.on('message', () =>
  console.log('This is just here so this file stays running'),
);
