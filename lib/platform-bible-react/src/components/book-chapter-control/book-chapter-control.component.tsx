import { SlDivider, SlMenu, SlMenuLabel } from '@shoelace-style/shoelace/dist/react';
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
// ? Pin functionality- pinning a menu item vs pinning the tab

// todo Pin menu item (book) functionality- should add a pinned book list above the old testament section
// todo Ability to disable a section (deuterocanon), or disable one book
// todo placeholder cannot be hardcoded- if book has no chapters or verses than it should just display book name
// todo menu should float instead of increasing height of toolbar
// todo add genre or bookType prop to BookMenuItem and coordinate color labels to it
// todo clicking book closes chapters
// todo "show to" button current book is outside view
// todo css for BookChapterInput

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
    // getChaptersForBook returns -1 if not found in scrBookData
    // scrBookData only includes OT and NT, so all DC will return -1
    return getChaptersForBook(Canon.bookIdToNumber(bookId));
  }, []);

  const handleSelectBook = (bookId: string) => {
    setSelectedBookId(bookId);
    handleSubmit({
      bookNum: Canon.bookIdToNumber(bookId),
      chapterNum: 1,
      verseNum: 1,
    });
    // If there are no chapters, then selecting the book will close the menu
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
    <>
      <BookChapterInput
        value={searchQuery}
        handleSearch={handleSearchInput}
        handleClick={handleInputClick}
        placeholder={`${Canon.bookNumberToEnglishName(scrRef.bookNum)} ${scrRef.chapterNum}:${scrRef.verseNum}`}
      />

      <div className="book-chapter-control">
        {isMenuOpen && (
          <SlMenu>
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
                    >
                      <ChapterSelect
                        handleSelectChapter={handleSelectChapter}
                        endChapter={fetchEndChapter(bookId)}
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