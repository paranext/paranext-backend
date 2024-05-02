import SELECT_PROJECT_DIALOG from '@renderer/components/dialogs/select-project.dialog';
import SELECT_MULTIPLE_PROJECTS_DIALOG from '@renderer/components/dialogs/select-multiple-projects.dialog';
import INVENTORY_DIALOG from '@renderer/components/dialogs/inventory-base.dialog';
import { DialogDefinition, DialogTabTypes } from './dialog-definition.model';

/**
 * Map of all available dialog definitions used to create dialogs
 *
 * If you add a dialog here, you must also add it on {@link DialogTypes}
 */
const DIALOGS: { [DialogTabType in DialogTabTypes]: DialogDefinition<DialogTabType> } = {
  [SELECT_PROJECT_DIALOG.tabType]: SELECT_PROJECT_DIALOG,
  [SELECT_MULTIPLE_PROJECTS_DIALOG.tabType]: SELECT_MULTIPLE_PROJECTS_DIALOG,
  [INVENTORY_DIALOG.tabType]: INVENTORY_DIALOG,
};

/** All tab types for available dialogs */
// Re-assert the type of keys.
// eslint-disable-next-line no-type-assertion/no-type-assertion
export const DIALOG_TAB_TYPES = Object.keys(DIALOGS) as DialogTabTypes[];

export default DIALOGS;
