import { SlMenu, SlMenuLabel } from '@shoelace-style/shoelace/dist/react';
import { Canon } from '@sillsdev/scripture';
import { useCallback, useState } from 'react';
import { ScriptureReference, getChaptersForBook } from 'platform-bible-utils';
import BookMenuItem from './book-menu-item.component';
import './book-chapter-control.component.css';
import BookChapterInput from './book-chapter-input.component';
import ChapterSelect from './chapter-select.component';

// ? Should selecting outside of menu close the menu?
// ? What to do with labels when no books match search in that category?
// ? On select book- sets verseRef to selected book 1:1, should it only set on selecting chapters?
// ? Book label colors- "indicates section or genre" changes per bookType and gets darker when selected, disabled sections have no colors
// ? What order should books be in- OT, DC, NT like mockup?
// ? Book chapter input searches chapter too?

// todo Pin functionality, pin icon
// todo Arrow down icon when menu item is clicked
// todo Ability to disable a section (deuterocanon), or disable one book
// todo Go through all css and make it match Figma- not sandbox
// todo placeholder cannot be hardcoded- if book has no chapters or verses than it should just display book name
// todo menu should float instead of increasing height of toolbar

type BookChapterControlProps = {
  scrRef: ScriptureReference;
  handleSubmit: (scrRef: ScriptureReference) => void;
};

type BookType = 'OT' | 'NT' | 'DC';
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
    // getChaptersForBook returns -1 if not found in scrBookData, scrBookData only includes OT and NT
    return getChaptersForBook(Canon.bookIdToNumber(bookId));
  }, []);

  const handleSelectBook = (bookId: string) => {
    setSelectedBookId(bookId);
    // If no chapters for that book- chapter and verse num should be 0?
    handleSubmit({
      bookNum: Canon.bookIdToNumber(bookId),
      chapterNum: 1,
      verseNum: 1,
    });
    if (fetchEndChapter(bookId) === -1) setMenuOpen(false);
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
    <div className="book-chapter-control">
      <BookChapterInput
        value={searchQuery}
        handleSearch={handleSearchInput}
        handleClick={handleInputClick}
        placeholder={`${Canon.bookNumberToEnglishName(scrRef.bookNum)} ${scrRef.chapterNum}:${scrRef.verseNum}`}
      />

      {isMenuOpen && (
        <SlMenu className="book-chapter-menu">
          {bookTypeArray.map((bookType) => (
            <div key={bookType}>
              <SlMenuLabel>{bookTypeLabels[bookType]}</SlMenuLabel>
              {fetchFilteredBooks(bookType).map((bookId) => (
                <div key={bookId} className="menu-item-container">
                  <BookMenuItem
                    key={bookId}
                    bookId={bookId}
                    handleSelectBook={() => handleSelectBook(bookId)}
                    isSelected={selectedBookId === bookId}
                  >
                    <div className="chapter-drawer">
                      <ChapterSelect
                        handleSelectChapter={handleSelectChapter}
                        endChapter={fetchEndChapter(bookId)}
                      />
                    </div>
                  </BookMenuItem>
                </div>
              ))}
            </div>
          ))}
        </SlMenu>
      )}
    </div>
  );
}

export default BookChapterControl;
