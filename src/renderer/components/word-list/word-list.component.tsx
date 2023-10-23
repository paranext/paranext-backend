import { useCallback, useEffect, useMemo, useState } from 'react';
import { SavedTabInfo, TabInfo } from '@shared/data/web-view.model';
import useData from '@renderer/hooks/papi-hooks/use-data.hook';
import { UsfmProviderDataTypes } from 'usfm-data-provider';

import './word-list.component.scss';
import useSetting from '@renderer/hooks/papi-hooks/use-setting.hook';
import {
  RefSelector,
  ScriptureReference,
  Table,
  TableCellClickArgs,
  TableSortColumn,
} from 'papi-components';
import { ScrVers, VerseRef } from '@sillsdev/scripture';
import VerseContentViewer from './verse-content-viewer.component';

export const TAB_TYPE_WORD_LIST = 'word-list';

const defaultScrRef: ScriptureReference = {
  bookNum: 1,
  chapterNum: 1,
  verseNum: 1,
};

export type WordListEntry = {
  word: string;
  count: number;
  scrRef: ScriptureReference[];
};

type Row = {
  word: string;
  count: number;
};

const defaultSortColumns: TableSortColumn[] = [{ columnKey: 'word', direction: 'ASC' }];

export default function WordList() {
  const [scrRef, setScrRef] = useSetting('platform.verseRef', defaultScrRef);
  const [wordArray, setWordArray] = useState<WordListEntry[]>([]);
  const [verseNum, setVerseNum] = useState<number>(1);
  const [verseText, , isVerseTextLoading] = useData.Verse<UsfmProviderDataTypes, 'Verse'>(
    'usfm',
    useMemo(
      () => new VerseRef(scrRef.bookNum, scrRef.chapterNum, verseNum, ScrVers.English),
      [scrRef, verseNum],
    ),
    'Loading verse',
  );
  const [rows, setRows] = useState<Row[]>([]);
  const [sortColumns, setSortColumns] = useState<TableSortColumn[]>(defaultSortColumns);
  const onSortColumnsChange = useCallback((changedSortColumns: TableSortColumn[]) => {
    setSortColumns(changedSortColumns.slice(-1));
  }, []);
  const [selectedWord, setSelectedWord] = useState<WordListEntry>();

  useEffect(() => {
    setWordArray([]);
    setVerseNum(1);
    setSelectedWord(undefined);
  }, [scrRef.bookNum, scrRef.chapterNum]);

  const processVerse = () => {
    const currentWordArray = [...wordArray];
    const wordMatches: RegExpMatchArray | null | undefined = verseText?.match(/\b[a-zA-Z’]+\b/g);
    if (wordMatches) {
      wordMatches.forEach((word) => {
        const existingEntry = currentWordArray.find(
          (entry) => entry.word === word.toLocaleLowerCase(),
        );
        if (existingEntry) {
          existingEntry.count += 1;
          const includesCurrentRef =
            existingEntry.scrRef.find(
              (ref) =>
                ref.bookNum === scrRef.bookNum &&
                ref.chapterNum === scrRef.chapterNum &&
                ref.verseNum === verseNum,
            ) !== undefined;
          if (!includesCurrentRef) {
            existingEntry.scrRef.push({
              bookNum: scrRef.bookNum,
              chapterNum: scrRef.chapterNum,
              verseNum,
            });
          }
        } else {
          const newEntry: WordListEntry = {
            word: word.toLocaleLowerCase(),
            count: 1,
            scrRef: [
              {
                bookNum: scrRef.bookNum,
                chapterNum: scrRef.chapterNum,
                verseNum,
              },
            ],
          };
          currentWordArray.push(newEntry);
        }
      });
    }
    setWordArray(currentWordArray);
  };

  useEffect(() => {
    if (isVerseTextLoading || !verseText) return;
    processVerse();
    setVerseNum(verseNum + 1);
  }, [isVerseTextLoading, verseText]);

  useEffect(() => {
    const newRows: Row[] = [];
    wordArray.forEach((word) => {
      newRows.push({ word: word.word, count: word.count });
    });
    setRows(newRows);
  }, [wordArray, isVerseTextLoading]);

  const sortedRows = useMemo((): readonly Row[] => {
    if (sortColumns.length === 0) return rows;
    const { columnKey, direction } = sortColumns[0];

    let sortedRowsLocal: Row[] = [...rows];

    switch (columnKey) {
      case 'word':
        sortedRowsLocal = sortedRowsLocal.sort((a, b) => a[columnKey].localeCompare(b[columnKey]));
        break;
      case 'count':
        sortedRowsLocal = sortedRowsLocal.sort((a, b) => a[columnKey] - b[columnKey]);
        break;
      default:
    }
    return direction === 'DESC' ? sortedRowsLocal.reverse() : sortedRowsLocal;
  }, [rows, sortColumns]);

  useEffect(() => {
    if (sortColumns.length === 0) {
      setSortColumns(defaultSortColumns);
    }
  }, [sortColumns]);

  const onCellClick = (args: TableCellClickArgs<Row>) => {
    const clickedWord = wordArray.find((entry) => entry.word === args.row.word);
    if (clickedWord) setSelectedWord(clickedWord);
  };

  return (
    <div className="word-list">
      <RefSelector
        scrRef={scrRef}
        handleSubmit={(newScrRef) => {
          setScrRef(newScrRef);
        }}
      />
      <Table<Row>
        columns={[
          {
            key: 'word',
            name: 'Word',
          },
          {
            key: 'count',
            name: 'Count',
          },
        ]}
        rows={sortedRows}
        rowKeyGetter={(row: Row) => {
          return row.word;
        }} // kan weg?
        onRowsChange={(changedRows: Row[]) => setRows(changedRows)}
        sortColumns={sortColumns}
        onSortColumnsChange={onSortColumnsChange}
        rowHeight={60}
        headerRowHeight={50}
        onCellClick={onCellClick}
      />
      {selectedWord && (
        <VerseContentViewer word={selectedWord.word} scrRefs={selectedWord.scrRef} />
      )}
    </div>
  );
}

export function loadWordListTab(savedTabInfo: SavedTabInfo): TabInfo {
  return {
    ...savedTabInfo,
    tabTitle: 'Word List',
    content: <WordList />,
  };
}
