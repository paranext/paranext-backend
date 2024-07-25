import InventoryDataTable, {
  CharacterData,
  Status,
} from '@/components/paratext-10-studio-components/inventory/inventory-data-table.component';
import OccurrencesTable from '@/components/paratext-10-studio-components/inventory/occurrences-table.component';
import { Input } from '@/components/shadcn-ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn-ui/select';
import { LanguageStrings, ScriptureReference, split } from 'platform-bible-utils';
import { useEffect, useState } from 'react';

const buildTableData = async (
  text: string,
  statusFilter: string,
  textFilter: string,
  validCharacters: string[],
  invalidCharacters: string[],
): Promise<CharacterData[]> => {
  const characterData: CharacterData[] = [];
  split(text, '').forEach((character) => {
    if (textFilter !== '' && !character.includes(textFilter)) return;
    const characterDataPoint = characterData.find((dataPoint) => {
      return dataPoint.character === character;
    });
    if (characterDataPoint) {
      characterDataPoint.count += 1;
    } else {
      let characterStatus: Status;
      if (validCharacters.includes(character)) characterStatus = true;
      if (invalidCharacters.includes(character)) characterStatus = false;
      if (
        statusFilter === 'all' ||
        (statusFilter === 'approved' && characterStatus === true) ||
        (statusFilter === 'unapproved' && characterStatus === false) ||
        (statusFilter === 'unknown' && characterStatus === undefined)
      ) {
        const newCharacter: CharacterData = {
          character,
          count: 1,
          status: characterStatus,
        };
        characterData.push(newCharacter);
      }
    }
  });

  return characterData;
};

interface CharacterInventoryProps {
  scriptureReference: ScriptureReference;
  setScriptureReference: (scriptureReference: ScriptureReference) => void;
  localizedStrings: LanguageStrings;
  projectId: string;
  getSetting: (
    characterSet: 'validCharacters' | 'invalidCharacters',
    projectId: string,
  ) => Promise<string[]>;
  setSetting: (
    characterSet: 'validCharacters' | 'invalidCharacters',
    projectId: string,
    characters: string[],
  ) => void;
  getText: (
    projectId: string,
    scriptureRef: ScriptureReference,
    scope: string,
  ) => Promise<string | undefined>;
}

function CharacterInventory({
  scriptureReference,
  setScriptureReference,
  localizedStrings,
  projectId,
  getSetting,
  setSetting,
  getText,
}: CharacterInventoryProps) {
  const allCharacters = localizedStrings['%webView_characterInventory_characters_all%'];
  const approvedCharacters = localizedStrings['%webView_characterInventory_characters_approved%'];
  const unapprovedCharacters =
    localizedStrings['%webView_characterInventory_characters_unapproved%'];
  const unknownCharacters = localizedStrings['%webView_characterInventory_characters_unknown%'];
  const scopeBook = localizedStrings['%webView_inventory_scope_book%'];
  const scopeChapter = localizedStrings['%webView_inventory_scope_chapter%'];
  const scopeVerse = localizedStrings['%webView_inventory_scope_verse%'];
  const filterText = localizedStrings['%webView_inventory_filter_text%'];
  const [validCharacters, setValidCharacters] = useState<string[]>([]);
  const [invalidCharacters, setInvalidCharacters] = useState<string[]>([]);
  const [text, setText] = useState<string | undefined>(undefined);
  const [scope, setScope] = useState<string>('book');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [textFilter, setTextFilter] = useState<string>('');
  const [inventoryTableData, setInventoryTableData] = useState<CharacterData[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<string>('');

  const statusChangeHandler = (characters: string[], status: Status) => {
    setInventoryTableData((prevTableData) => {
      let tableData: CharacterData[] = [];
      characters.forEach((character) => {
        tableData = prevTableData.map((tableEntry) => {
          if (tableEntry.character === character && tableEntry.status !== status)
            return { ...tableEntry, status };
          return tableEntry;
        });
      });

      setValidCharacters((prevValidCharacters) => {
        let newValidCharacters: string[] = [...prevValidCharacters];
        characters.forEach((character) => {
          if (status === true) {
            if (!newValidCharacters.includes(character)) {
              newValidCharacters.push(character);
            }
          } else {
            newValidCharacters = newValidCharacters.filter((validChar) => validChar !== character);
          }
        });

        setSetting('validCharacters', projectId, newValidCharacters);
        return newValidCharacters;
      });

      setInvalidCharacters((prevInvalidCharacters) => {
        let newInvalidCharacters: string[] = [...prevInvalidCharacters];
        characters.forEach((character) => {
          if (status === false) {
            if (!newInvalidCharacters.includes(character)) {
              newInvalidCharacters.push(character);
            }
          } else {
            newInvalidCharacters = newInvalidCharacters.filter(
              (invalidChar) => invalidChar !== character,
            );
          }
        });

        setSetting('invalidCharacters', projectId, newInvalidCharacters);
        return newInvalidCharacters;
      });

      return tableData;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setValidCharacters(await getSetting('validCharacters', projectId));
        setInvalidCharacters(await getSetting('invalidCharacters', projectId));
      } catch (error) {
        throw new Error('Failed to fetch characters from project settings');
      }
    };

    fetchData();
  }, [projectId, getSetting]);

  useEffect(() => {
    const getNewText = async () => {
      try {
        const newText = await getText(projectId, scriptureReference, scope);
        setText(newText);
      } catch (error) {
        throw new Error('Failed getting scripture text');
      }
    };

    getNewText();
  }, [projectId, scriptureReference, scope, getText]);

  useEffect(() => {
    if (!text) {
      setInventoryTableData([]);
      return;
    }
    const buildData = async () => {
      try {
        setInventoryTableData(
          await buildTableData(text, statusFilter, textFilter, validCharacters, invalidCharacters),
        );
      } catch (error) {
        throw new Error('Failed building table data');
      }
    };

    buildData();
  }, [validCharacters, invalidCharacters, text, statusFilter, textFilter]);

  return (
    <div className="pr-twp">
      <div className="pr-flex">
        <Select
          onValueChange={(value: string) => setStatusFilter(value)}
          defaultValue={statusFilter}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{allCharacters}</SelectItem>
            <SelectItem value="approved">{approvedCharacters}</SelectItem>
            <SelectItem value="unapproved">{unapprovedCharacters}</SelectItem>
            <SelectItem value="unknown">{unknownCharacters}</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value: string) => setScope(value)} defaultValue={scope}>
          <SelectTrigger>
            <SelectValue placeholder="Select scope" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="book">{scopeBook}</SelectItem>
            <SelectItem value="chapter">{scopeChapter}</SelectItem>
            <SelectItem value="verse">{scopeVerse}</SelectItem>
          </SelectContent>
        </Select>
        <Input
          className="pr-rounded-md pr-border"
          placeholder={filterText}
          value={textFilter}
          onChange={(event) => {
            setTextFilter(event.target.value);
          }}
        />
      </div>
      <div
        className={`pr-overflow-y-auto pr-rounded-md pr-border ${selectedCharacter !== '' && 'pr-max-h-96'}`}
      >
        <InventoryDataTable
          tableData={inventoryTableData}
          onStatusChange={statusChangeHandler}
          onSelectCharacter={(character: string) => {
            setSelectedCharacter(character);
          }}
          localizedStrings={localizedStrings}
        />
      </div>
      {selectedCharacter !== '' && (
        <div className="pr-mt-4 pr-rounded-md pr-border">
          <OccurrencesTable
            selectedCharacter={selectedCharacter}
            text={text}
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

export default CharacterInventory;
