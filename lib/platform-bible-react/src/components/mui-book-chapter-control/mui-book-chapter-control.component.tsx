import { Menu, Divider, ListSubheader } from '@mui/material';
import { Canon } from '@sillsdev/scripture';
import { useCallback, useState } from 'react';
import { ScriptureReference, getChaptersForBook } from 'platform-bible-utils';
import BookMenuItem, { BookType } from './mui-book-menu-item.component';
// import './book-chapter-control.component.css';
import BookChapterInput from './mui-book-chapter-input.component';
import ChapterSelect from './mui-chapter-select.component';

// Copied the shoelace implementation and changed to MUI components
/* Had to:
  - Rename things to avoid collisions with shoelace
  - Add open check to the Menu itself
  - Use TextField instead of Input and pass the icons as props to it
  - Remove shoelace specific input event
  - Not able to type while the menu is open- clicking outside of menu doesn't close it
*/

export type MuiBookChapterControlProps = {
  scrRef: ScriptureReference;
  handleSubmit: (scrRef: ScriptureReference) => void;
};

type MuiBookTypeLabels = {
  [bookType in BookType]: string;
};
const bookTypeLabels: MuiBookTypeLabels = {
  OT: 'Old Testament',
  NT: 'New Testament',
  DC: 'Deuterocanon',
};
const bookTypeArray: BookType[] = ['OT', 'NT', 'DC'];

function MuiBookChapterControl({ scrRef, handleSubmit }: MuiBookChapterControlProps) {
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
    setMenuOpen(!isMenuOpen);
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
        <Menu
          tabIndex={-1}
          // onBlur={() => setMenuOpen(false)} // todo this does what we want unless they click the input then it should stay open
          open={isMenuOpen}
          style={{ maxWidth: '289px', maxHeight: '500px', overflowY: 'auto' }}
        >
          {bookTypeArray.map((bookType) => (
            <div key={bookType}>
              <ListSubheader>{bookTypeLabels[bookType]}</ListSubheader>
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
              {bookType === 'OT' || bookType === 'NT' ? <Divider /> : undefined}
            </div>
          ))}
        </Menu>
      </div>
    </>
  );
}

export default MuiBookChapterControl;
