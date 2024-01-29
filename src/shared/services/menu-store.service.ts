import {
  MenuStoreDataProviderEngine,
  getMenuDataObject,
} from '@extension-host/services/menu-store.service-host';
import { MenuStoreServiceType, menuStoreServiceProviderName } from './menu-store.service-model';
import { registerEngineByType } from './data-provider.service';

/**
 * TODO: Similar proxy-ing as in the service-host, create utility function to use in both places
 * that accepts what you want to proxy over and a handler. Notes from TJ: Maybe one way to do the
 * utility function is to have just one input that is an async function that gets the object in
 * question, like this:
 *
 *     function createSyncProxyForAsyncObject<T extends object>(getObject: () => Promise<T>): T;
 *
 * So basically, inside the proxy, you just call and await `getObject`and then run the method on
 * that object instead of running an await function and then calling something on the object. Then
 * using it would look like:
 *
 *     const menuStoreService = createSyncProxyForAsyncObject<MenuStoreService>(async () => { await initialize(); return dataProvider; });`.
 */

let dataProvider: MenuStoreServiceType;
let initializationPromise: Promise<void>;
async function initialize(): Promise<void> {
  if (!initializationPromise) {
    initializationPromise = new Promise<void>((resolve, reject) => {
      const executor = async () => {
        try {
          dataProvider = await registerEngineByType(
            menuStoreServiceProviderName,
            new MenuStoreDataProviderEngine(await getMenuDataObject()),
          );
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      executor();
    });
  }
  return initializationPromise;
}

// No-type-assertion: We are calling stuff off of dataProvider which doesn't exist when we create this proxy.
// So we use an empty object as a placeholder while we get dataProvider.
// No-unused-vars: Using someone else's api and we don't want to use target.
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-type-assertion/no-type-assertion
const menuStoreService: MenuStoreServiceType = new Proxy({} as MenuStoreServiceType, {
  get(_target, methodName): (typeof dataProvider)[keyof typeof dataProvider] {
    return async (...args: unknown[]) => {
      await initialize();
      // The args here are the parameters for the method specified
      // @ts-expect-error 2556
      return dataProvider[methodName](...args);
    };
  },
});

export default menuStoreService;