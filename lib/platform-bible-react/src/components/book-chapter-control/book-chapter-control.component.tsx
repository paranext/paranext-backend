import {
  SlButton,
  SlDivider,
  SlDropdown,
  SlMenu,
  SlMenuItem,
  SlMenuLabel,
  SlRange,
} from '@shoelace-style/shoelace/dist/react';
import { Canon } from '@sillsdev/scripture';
import { useCallback, useState } from 'react';
import { ScriptureReference, getChaptersForBook } from 'platform-bible-utils';
import BookMenuItem, { BookType } from './book-menu-item.component';
import './book-chapter-control.component.css';
import BookChapterInput from './book-chapter-input.component';
import ChapterSelect from './chapter-select.component';

// ? What to do with SlMenuLabel when no books match search in that category?
// ? On select book- sets verseRef to selected book 1:1, should it only set on selecting chapters?
// ? What order should books be in- OT, DC, NT like mockup?
// ? Book chapter input should search for chapter too?
// ? Pin functionality- pinning a menu item vs pinning the tab
// ? When is menu supposed to close- currently closes on selecting a chapter or selecting a book that contains no chapters
// ? Should selecting outside of menu close the menu?

// todo Pin menu item (book) functionality- should add a pinned book list above the old testament section
// todo Ability to disable a section (deuterocanon), or disable one book- when disabled no color label
// todo placeholder cannot be hardcoded- if book has no chapters or verses than it should just display book name
// todo "show to" button current book is outside view

export type BookChapterControlProps = {
  scrRef: ScriptureReference;
  handleSubmit: (scrRef: ScriptureReference) => void;
};

type BookTypeLabels = {
  [bookType in BookType]: string;
};
const bookTypeLabels: BookTypeLabels = {
  OT: 'Old Testament',
  NT: 'New Testament',
  DC: 'Deuterocanon',
};
const bookTypeArray: BookType[] = ['OT', 'NT', 'DC'];

function BookChapterControl({ scrRef, handleSubmit }: BookChapterControlProps) {
  const { allBookIds } = Canon;

  const fetchGroupedBooks = useCallback(
    (bookType: BookType) => {
      const groupedBooks = {
        OT: allBookIds.filter((bookId) => Canon.isBookOT(bookId)),
        NT: allBookIds.filter((bookId) => Canon.isBookNT(bookId)),
        DC: allBookIds.filter((bookId) => Canon.isBookDC(bookId)),
      };
      return groupedBooks[bookType];
    },
    [allBookIds],
  );

  const [selectedBookId, setSelectedBookId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const fetchFilteredBooks = useCallback(
    (bookType: BookType) => {
      return fetchGroupedBooks(bookType).filter(
        (bookId: string) =>
          Canon.bookIdToEnglishName(bookId).toLowerCase().includes(searchQuery.toLowerCase()) ||
          bookId.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    },
    [fetchGroupedBooks, searchQuery],
  );

  const fetchEndChapter = useCallback((bookId: string) => {
    // getChaptersForBook returns -1 if not found in scrBookData
    // scrBookData only includes OT and NT, so all DC will return -1
    return getChaptersForBook(Canon.bookIdToNumber(bookId));
  }, []);

  const handleSelectBook = (bookId: string) => {
    setSelectedBookId(selectedBookId !== bookId ? bookId : '');
    // If there are no chapters, then selecting the book will close the menu and set the
    // chapter and verse numbers to 1
    if (fetchEndChapter(bookId) === -1) {
      handleSubmit({
        bookNum: Canon.bookIdToNumber(bookId),
        chapterNum: 1,
        verseNum: 1,
      });
      setMenuOpen(false);
    }
  };

  const handleSearchInput = (searchString: string) => {
    setSearchQuery(searchString);
  };

  const handleInputClick = () => {
    setMenuOpen(true);
  };

  const handleSelectChapter = (chapterNumber: number) => {
    setMenuOpen(false);
    handleSubmit({
      bookNum: Canon.bookIdToNumber(selectedBookId),
      chapterNum: chapterNumber,
      verseNum: 1,
    });
  };

  return (
    <>
      <BookChapterInput
        value={searchQuery}
        handleSearch={handleSearchInput}
        handleClick={handleInputClick}
        placeholder={`${Canon.bookNumberToEnglishName(scrRef.bookNum)} ${scrRef.chapterNum}:${scrRef.verseNum}`}
      />

      <div className="book-chapter-menu">
        {isMenuOpen && (
          <SlMenu
            tabIndex={-1}
            // This is here so that when we click out of the menu it closes
            // But it breaks the view dropdown
            // onBlur={() => {
            //   setMenuOpen(false);
            // }}
          >
            {/* Prevent default keeps the menu open when you click the menu item */}
            <SlMenuItem onClick={(e) => e.preventDefault()} style={{ fontSize: '14px' }}>
              Zoom
              <span>50%</span>
              <SlRange min={50} max={200} onSlChange={() => setMenuOpen(false)} />
              <span>200%</span>
            </SlMenuItem>
            {/* Wasn't allowing us to go into the new submenu because of the onBlur commented out above */}
            <SlMenuItem onClick={(e) => e.preventDefault()} style={{ fontSize: '14px' }}>
              View
              <SlDropdown>
                <SlButton slot="trigger" caret>
                  Publish
                </SlButton>
                {/* Can get the users selection from this */}
                <SlMenu onSlSelect={() => setMenuOpen(false)}>
                  <SlMenuItem>Publish</SlMenuItem>
                  <SlMenuItem>Draft</SlMenuItem>
                  <SlMenuItem>Reading</SlMenuItem>
                </SlMenu>
              </SlDropdown>
            </SlMenuItem>
            {bookTypeArray.map((bookType) => (
              <div key={bookType}>
                <SlMenuLabel>{bookTypeLabels[bookType]}</SlMenuLabel>
                {fetchFilteredBooks(bookType).map((bookId) => (
                  <div key={bookId}>
                    <BookMenuItem
                      key={bookId}
                      bookId={bookId}
                      handleSelectBook={() => handleSelectBook(bookId)}
                      isSelected={selectedBookId === bookId}
                      bookType={bookType}
                    >
                      <ChapterSelect
                        handleSelectChapter={handleSelectChapter}
                        endChapter={fetchEndChapter(bookId)}
                        // Without this condition- will highlight that chapterNum in every book- not just the selected book
                        activeChapter={
                          scrRef.bookNum === Canon.bookIdToNumber(bookId) ? scrRef.chapterNum : 0
                        }
                      />
                    </BookMenuItem>
                  </div>
                ))}
                {/* We know this is right because the order of bookTypes will not change */}
                {bookType === 'OT' || bookType === 'NT' ? <SlDivider /> : undefined}
              </div>
            ))}
          </SlMenu>
        )}
      </div>
    </>
  );
}

export default BookChapterControl;
