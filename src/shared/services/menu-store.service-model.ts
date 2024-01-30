import { MultiColumnMenu, SingleColumnMenu, WebViewMenus } from '@shared/schemas/menu-data.types';
import { OnDidDispose, UnsubscriberAsync } from 'platform-bible-utils';
import {
  DataProviderDataType,
  DataProviderSubscriberOptions,
  DataProviderUpdateInstructions,
} from './papi-core.service';

export const menuStoreServiceProviderName = 'platform.menuStoreServiceDataProvider';
export const menuStoreServiceObjectToProxy = Object.freeze({ name: menuStoreServiceProviderName });

// Data Type to initialize data provider engine with
export type MenuStoreDataTypes = {
  MenuData: DataProviderDataType<string, MenuContent, MenuContent>;
};

declare module 'papi-shared-types' {
  export interface DataProviders {
    [menuStoreServiceProviderName]: MenuStoreServiceType;
  }
}

/**
 * JSDOC SOURCE menuStoreService
 *
 * Provides Menu data for specific menu
 */
export type MenuStoreServiceType = {
  /**
   * Look up menu data for specific menu key
   *
   * @param menuType String key that corresponds to a menu
   * @returns Menu content object
   */
  getMenuData: (menuType: string) => Promise<MenuContent>; // When I change this one the return fails
  /**
   * Set the menuContent of a specific menuType
   *
   * @param menuType String key that corresponds to a menu
   * @param menuContent Content to set for specific menuType
   * @returns Unsubscriber function
   */
  setMenuData: (
    menuType: string,
    menuContent: MenuContent,
  ) => Promise<DataProviderUpdateInstructions<MenuStoreDataTypes>>;
  /**
   * Subscribe to run a callback function when the menu data is changed
   *
   * @param menuType Tells the provider what changes to listen for
   * @param callback Function to run with the updated menuContent for this selector
   * @param options Various options to adjust how the subscriber emits updates
   * @returns Unsubscriber function (run to unsubscribe from listening for updates)
   */
  subscribeMenuData: (
    menuType: string,
    callback: (menuContent: MenuContent) => void,
    options?: DataProviderSubscriberOptions,
  ) => Promise<UnsubscriberAsync>;
} & OnDidDispose &
  typeof menuStoreServiceObjectToProxy;

export type MenuData = {
  [menuType: string]: MenuContent;
};

export type MenuContent = MultiColumnMenu | SingleColumnMenu | WebViewMenus;
