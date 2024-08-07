import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { LocalizedStringValue, ScriptureReference } from 'platform-bible-utils';
import { Input } from '@/components/shadcn-ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn-ui/select';
import DataTable, {
  ColumnDef,
  RowContents,
  SortDirection,
  TableContents,
} from '@/components/advanced/data-table/data-table.component';
import OccurrencesTable from '@/components/advanced/inventory/occurrences-table.component';
import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon } from 'lucide-react';

export const INVENTORY_STRING_KEYS = Object.freeze([
  '%webView_inventory_all%',
  '%webView_inventory_approved%',
  '%webView_inventory_unapproved%',
  '%webView_inventory_unknown%',
  '%webView_inventory_scope_book%',
  '%webView_inventory_scope_chapter%',
  '%webView_inventory_scope_verse%',
  '%webView_inventory_filter_text%',
  '%webView_inventory_occurrences_table_header_reference%',
  '%webView_inventory_occurrences_table_header_occurrence%',
] as const);

export type InventoryLocalizedStrings = {
  [localizedInventoryKey in (typeof INVENTORY_STRING_KEYS)[number]]?: LocalizedStringValue;
};

export type Status = 'approved' | 'unapproved' | 'unknown';

export type ItemData = {
  item: string;
  count: number;
  status: Status;
};

export const getSortingIcon = (sortDirection: false | SortDirection): ReactNode => {
  if (sortDirection === 'asc') {
    return <ArrowUpIcon className="pr-ms-2 pr-h-4 pr-w-4" />;
  }
  if (sortDirection === 'desc') {
    return <ArrowDownIcon className="pr-ms-2 pr-h-4 pr-w-4" />;
  }
  return <ArrowUpDownIcon className="pr-ms-2 pr-h-4 pr-w-4" />;
};

const filterItemData = (
  items: ItemData[],
  statusFilter: string,
  textFilter: string,
): ItemData[] => {
  let filteredItemData: ItemData[] = items;

  if (statusFilter !== 'all') {
    filteredItemData = filteredItemData.filter(
      (item) =>
        (statusFilter === 'approved' && item.status === 'approved') ||
        (statusFilter === 'unapproved' && item.status === 'unapproved') ||
        (statusFilter === 'unknown' && item.status === 'unknown'),
    );
  }

  if (textFilter !== '')
    filteredItemData = filteredItemData.filter((item) => item.item.includes(textFilter));

  return filteredItemData;
};

const convertTextToItemData = (
  text: string,
  getInventoryItems: (text: string) => string[],
  getStatusForItem: (item: string) => Status,
): ItemData[] => {
  const itemData: ItemData[] = [];

  const items: string[] = getInventoryItems(text);

  for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
    const item = items[itemIndex];
    const existingItem = itemData.find((entry) => {
      return entry.item === item;
    });
    if (existingItem) {
      existingItem.count += 1;
    } else {
      const newItem: ItemData = {
        item,
        count: 1,
        status: getStatusForItem(item),
      };
      itemData.push(newItem);
    }
  }

  return itemData;
};

const localizeString = (
  strings: InventoryLocalizedStrings,
  key: keyof InventoryLocalizedStrings,
) => {
  return strings[key] ?? key;
};

interface InventoryProps {
  scriptureReference: ScriptureReference;
  setScriptureReference: (scriptureReference: ScriptureReference) => void;
  localizedStrings: InventoryLocalizedStrings;
  extractItems: (text: string, item?: string | undefined) => string[];
  approvedItems: string[];
  onApprovedItemsChange: (items: string[]) => void;
  unapprovedItems: string[];
  onUnapprovedItemsChange: (items: string[]) => void;
  text: string | undefined;
  scope: string;
  onScopeChange: (scope: string) => void;
  getColumns: (
    onStatusChange: (newItems: string[], status: Status) => void,
  ) => ColumnDef<ItemData>[];
}

function Inventory({
  scriptureReference,
  setScriptureReference,
  localizedStrings,
  extractItems,
  approvedItems,
  onApprovedItemsChange,
  unapprovedItems,
  onUnapprovedItemsChange,
  text,
  scope,
  onScopeChange,
  getColumns,
}: InventoryProps) {
  const allItemsText = localizeString(localizedStrings, '%webView_inventory_all%');
  const approvedItemsText = localizeString(localizedStrings, '%webView_inventory_approved%');
  const unapprovedItemsText = localizeString(localizedStrings, '%webView_inventory_unapproved%');
  const unknownItemsText = localizeString(localizedStrings, '%webView_inventory_unknown%');
  const scopeBookText = localizeString(localizedStrings, '%webView_inventory_scope_book%');
  const scopeChapterText = localizeString(localizedStrings, '%webView_inventory_scope_chapter%');
  const scopeVerseText = localizeString(localizedStrings, '%webView_inventory_scope_verse%');
  const filterText = localizeString(localizedStrings, '%webView_inventory_filter_text%');

  const [items, setItems] = useState<ItemData[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [textFilter, setTextFilter] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<string>('');

  const statusChangeHandler = useCallback(
    (changedItems: string[], status: Status) => {
      setItems((prevTableData) => {
        let tableData: ItemData[] = [];
        changedItems.forEach((item) => {
          tableData = prevTableData.map((tableEntry) => {
            if (tableEntry.item === item && tableEntry.status !== status)
              return { ...tableEntry, status };
            return tableEntry;
          });
        });
        return tableData;
      });

      let newApprovedItems: string[] = [...approvedItems];
      changedItems.forEach((item) => {
        if (status === 'approved') {
          if (!newApprovedItems.includes(item)) {
            newApprovedItems.push(item);
          }
        } else {
          newApprovedItems = newApprovedItems.filter((validItem) => validItem !== item);
        }
      });
      onApprovedItemsChange(newApprovedItems);

      let newUnapprovedItems: string[] = [...unapprovedItems];
      changedItems.forEach((item) => {
        if (status === 'unapproved') {
          if (!newUnapprovedItems.includes(item)) {
            newUnapprovedItems.push(item);
          }
        } else {
          newUnapprovedItems = newUnapprovedItems.filter(
            (unapprovedItem) => unapprovedItem !== item,
          );
        }
      });
      onUnapprovedItemsChange(newUnapprovedItems);
    },
    [approvedItems, onApprovedItemsChange, unapprovedItems, onUnapprovedItemsChange],
  );

  const getStatusForItem = useCallback(
    (item: string): Status => {
      if (approvedItems.includes(item)) return 'approved';
      if (unapprovedItems.includes(item)) return 'unapproved';
      return 'unknown';
    },
    [approvedItems, unapprovedItems],
  );

  useEffect(() => {
    if (!text) return;
    setItems(convertTextToItemData(text, extractItems, getStatusForItem));
  }, [extractItems, text, getStatusForItem]);

  const filteredItemData = useMemo(() => {
    return filterItemData(items, statusFilter, textFilter);
  }, [items, statusFilter, textFilter]);

  useEffect(() => {
    setSelectedItem('');
  }, [filteredItemData]);

  const rowClickHandler = (row: RowContents<ItemData>, table: TableContents<ItemData>) => {
    table.toggleAllRowsSelected(false); // this is pretty hacky, and also prevents us from selecting multiple rows
    row.toggleSelected(undefined);

    setSelectedItem(row.getValue('item'));
  };

  const columns = useMemo(() => getColumns(statusChangeHandler), [getColumns, statusChangeHandler]);

  return (
    <div className="pr-twp pr-flex pr-h-full pr-flex-col">
      <div className="pr-flex">
        <Select onValueChange={(value) => setStatusFilter(value)} defaultValue={statusFilter}>
          <SelectTrigger className="pr-m-1">
            <SelectValue placeholder="Select filter" />
          </SelectTrigger>
          <SelectContent className="pr-font-sans">
            <SelectItem value="all">{allItemsText}</SelectItem>
            <SelectItem value="approved">{approvedItemsText}</SelectItem>
            <SelectItem value="unapproved">{unapprovedItemsText}</SelectItem>
            <SelectItem value="unknown">{unknownItemsText}</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => onScopeChange(value)} defaultValue={scope}>
          <SelectTrigger className="pr-m-1">
            <SelectValue placeholder="Select scope" />
          </SelectTrigger>
          <SelectContent className="pr-font-sans">
            <SelectItem value="book">{scopeBookText}</SelectItem>
            <SelectItem value="chapter">{scopeChapterText}</SelectItem>
            <SelectItem value="verse">{scopeVerseText}</SelectItem>
          </SelectContent>
        </Select>
        <Input
          className="pr-m-1 pr-rounded-md pr-border"
          placeholder={filterText}
          value={textFilter}
          onChange={(event) => {
            setTextFilter(event.target.value);
          }}
        />
      </div>
      <div className="pr-m-1 pr-flex-1 pr-overflow-auto pr-rounded-md pr-border">
        <DataTable
          columns={columns}
          data={filteredItemData}
          onRowClickHandler={rowClickHandler}
          stickyHeader
        />
      </div>
      {selectedItem !== '' && (
        <div className="pr-m-1 pr-flex-1 pr-overflow-auto pr-rounded-md pr-border">
          <OccurrencesTable
            selectedItem={selectedItem}
            text={text}
            extractItems={extractItems}
            scriptureReference={scriptureReference}
            setScriptureReference={(newScriptureReference) =>
              setScriptureReference(newScriptureReference)
            }
            localizedStrings={localizedStrings}
          />
        </div>
      )}
    </div>
  );
}

export default Inventory;
