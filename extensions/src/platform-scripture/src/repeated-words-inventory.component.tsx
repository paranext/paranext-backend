import { LanguageStrings, LocalizeKey, ScriptureReference } from 'platform-bible-utils';
import { CircleCheckIcon, CircleHelpIcon, CircleXIcon } from 'lucide-react';
import {
  Button,
  ColumnDef,
  Inventory,
  getSortingIcon,
  ItemData,
  Status,
} from 'platform-bible-react';
import { useLocalizedStrings } from '@papi/frontend/react';

const REPEATED_WORDS_INVENTORY_STRING_KEYS: LocalizeKey[] = [
  '%webView_inventory_table_header_repeated_words%',
  '%webView_inventory_table_header_count%',
  '%webView_inventory_table_header_status%',
];

const buildColumns = (
  itemLabel: string,
  countLabel: string,
  statusLabel: string,
  statusChangeHandler: (items: string[], status: Status) => void,
): ColumnDef<ItemData>[] => [
  {
    accessorKey: 'item',
    header: ({ column }) => {
      return (
        <Button onClick={() => column.toggleSorting(undefined)}>
          {itemLabel}
          {getSortingIcon(column.getIsSorted())}
        </Button>
      );
    },
  },
  {
    accessorKey: 'count',
    header: ({ column }) => {
      return (
        <Button onClick={() => column.toggleSorting(undefined)}>
          {countLabel}
          {getSortingIcon(column.getIsSorted())}
        </Button>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ column, table }) => {
      const selectedRows = table.getSelectedRowModel().rows;

      const items: string[] = [];
      selectedRows.forEach((row) => {
        items.push(row.getValue('item'));
      });

      return (
        <>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={() => column.toggleSorting(undefined)}>
              {statusLabel}
              {getSortingIcon(column.getIsSorted())}
            </Button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button style={{ margin: 2 }}>
              <CircleCheckIcon
                onClick={() => {
                  statusChangeHandler(items, true);
                }}
              />
            </Button>
            <Button style={{ margin: 2 }}>
              <CircleXIcon
                onClick={() => {
                  statusChangeHandler(items, false);
                }}
              />
            </Button>
            <Button style={{ margin: 2 }}>
              <CircleHelpIcon
                onClick={() => {
                  statusChangeHandler(items, undefined);
                }}
              />
            </Button>
          </div>
        </>
      );
    },
    cell: ({ row }) => {
      const status: Status = row.getValue('status');
      if (status === true) {
        return <CircleCheckIcon />;
      }
      if (status === false) {
        return <CircleXIcon />;
      }
      return <CircleHelpIcon />;
    },
  },
];

const extractItems = (text: string, target: string | undefined = undefined): string[] => {
  const repeatedWords: string[] = [];
  const words = text.split(/[\s]+/);
  words.forEach((word, index, allWords) => {
    if (target && word !== target) return;
    if (index + 1 < allWords.length && word === allWords[index + 1]) repeatedWords.push(word);
  });
  return repeatedWords;
};

interface RepeatedWordsInventoryProps {
  scriptureReference: ScriptureReference;
  setScriptureReference: (scriptureReference: ScriptureReference) => void;
  localizedStrings: LanguageStrings;
  approvedItems: string[];
  onApprovedItemsChange: (items: string[]) => void;
  unapprovedItems: string[];
  onUnapprovedItemsChange: (items: string[]) => void;
  text: string | undefined;
  scope: string;
  onScopeChange: (scope: string) => void;
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

  const itemLabel =
    repeatedWordsInventoryStrings['%webView_inventory_table_header_repeated_words%'];
  const countLabel = repeatedWordsInventoryStrings['%webView_inventory_table_header_count%'];
  const statusLabel = repeatedWordsInventoryStrings['%webView_inventory_table_header_status%'];

  const columns = (onStatusChange: (changedItems: string[], status: Status) => void) => {
    return buildColumns(itemLabel, countLabel, statusLabel, onStatusChange);
  };

  return (
    <Inventory
      scriptureReference={scriptureReference}
      setScriptureReference={setScriptureReference}
      localizedStrings={localizedStrings}
      extractItems={extractItems}
      approvedItems={approvedItems}
      onApprovedItemsChange={onApprovedItemsChange}
      unapprovedItems={unapprovedItems}
      onUnapprovedItemsChange={onUnapprovedItemsChange}
      text={text}
      scope={scope}
      onScopeChange={onScopeChange}
      columns={columns}
    />
  );
}

export default RepeatedWordsInventory;
