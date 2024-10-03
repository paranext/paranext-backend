import { LanguageStrings, LocalizeKey, ScriptureReference } from 'platform-bible-utils';
import {
  ColumnDef,
  Inventory,
  ItemData,
  Scope,
  Status,
  inventoryCountColumn,
  inventoryItemColumn,
  inventoryStatusColumn,
} from 'platform-bible-react';
import { useLocalizedStrings } from '@papi/frontend/react';
import { useCallback, useMemo } from 'react';
import { extractRepeatedWords } from './inventory-utils';

const REPEATED_WORDS_INVENTORY_STRING_KEYS: LocalizeKey[] = [
  '%webView_inventory_table_header_repeated_words%',
  '%webView_inventory_table_header_count%',
  '%webView_inventory_table_header_status%',
];

/**
 * Function that constructs the column for the inventory component
 *
 * @param itemLabel Localized label for the item column (e.g. 'Character', 'Repeated Word', etc.)
 * @param countLabel Localized label for the count column
 * @param statusLabel Localized label for the status column
 * @param statusChangeHandler Callback function that handles status updates to selected item(s)
 * @returns An array of columns that can be passed into the inventory component
 */
const createColumns = (
  itemLabel: string,
  countLabel: string,
  statusLabel: string,
  statusChangeHandler: (items: string[], status: Status) => void,
): ColumnDef<ItemData>[] => [
  inventoryItemColumn(itemLabel),
  inventoryCountColumn(countLabel),
  inventoryStatusColumn(statusLabel, statusChangeHandler),
];

interface RepeatedWordsInventoryProps {
  scriptureReference: ScriptureReference;
  setScriptureReference: (scriptureReference: ScriptureReference) => void;
  localizedStrings: LanguageStrings;
  approvedItems: string[];
  onApprovedItemsChange: (items: string[]) => void;
  unapprovedItems: string[];
  onUnapprovedItemsChange: (items: string[]) => void;
  text: string | undefined;
  scope: Scope;
  onScopeChange: (scope: Scope) => void;
}

function RepeatedWordsInventory({
  scriptureReference,
  setScriptureReference,
  localizedStrings,
  approvedItems,
  onApprovedItemsChange,
  unapprovedItems,
  onUnapprovedItemsChange,
  text,
  scope,
  onScopeChange,
}: RepeatedWordsInventoryProps) {
  const [repeatedWordsInventoryStrings] = useLocalizedStrings(REPEATED_WORDS_INVENTORY_STRING_KEYS);
  const itemLabel = useMemo(
    () => repeatedWordsInventoryStrings['%webView_inventory_table_header_repeated_words%'],
    [repeatedWordsInventoryStrings],
  );
  const countLabel = useMemo(
    () => repeatedWordsInventoryStrings['%webView_inventory_table_header_count%'],
    [repeatedWordsInventoryStrings],
  );
  const statusLabel = useMemo(
    () => repeatedWordsInventoryStrings['%webView_inventory_table_header_status%'],
    [repeatedWordsInventoryStrings],
  );

  const getColumns = useCallback(
    (onStatusChange: (changedItems: string[], status: Status) => void) =>
      createColumns(itemLabel, countLabel, statusLabel, onStatusChange),
    [itemLabel, countLabel, statusLabel],
  );

  return (
    <Inventory
      scriptureReference={scriptureReference}
      setScriptureReference={setScriptureReference}
      localizedStrings={localizedStrings}
      extractItems={extractRepeatedWords}
      approvedItems={approvedItems}
      onApprovedItemsChange={onApprovedItemsChange}
      unapprovedItems={unapprovedItems}
      onUnapprovedItemsChange={onUnapprovedItemsChange}
      text={text}
      scope={scope}
      onScopeChange={onScopeChange}
      getColumns={getColumns}
    />
  );
}

export default RepeatedWordsInventory;
