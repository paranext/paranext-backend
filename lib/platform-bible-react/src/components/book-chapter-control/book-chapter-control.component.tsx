import { SlMenu, SlMenuLabel } from '@shoelace-style/shoelace/dist/react';
import { Canon } from '@sillsdev/scripture';
import { useState } from 'react';
import { ScriptureReference, getChaptersForBook } from 'platform-bible-utils';
import BookMenuItem from './book-menu-item.component';
import './book-chapter-control.component.css';
import BookChapterInput from './book-chapter-input.component';
import ChapterSelect from './chapter-select.component';

// TODO: Add rest of books, change to object with book type as prop so you can map Ids once?
// TODO: Selecting outside of menu closes menu?
// TODO: Pin functionality, pin icon
// TODO: Arrow down icon when menu item is clicked
// TODO: Filtering by search query is not working

type BookChapterControlProps = {
  scrRef: ScriptureReference;
  handleSubmit: (scrRef: ScriptureReference) => void;
};

const bookTypeLabels: { [bookType: string]: string } = {
  OT: 'Old Testament',
  NT: 'New Testament',
  DC: 'Deuterocanon',
};

function BookChapterControl({ scrRef, handleSubmit }: BookChapterControlProps) {
  const { allBookIds } = Canon;
  const oldTestamentIds: string[] = allBookIds.filter((bookId) => Canon.isBookOT(bookId));
  const newTestamentIds: string[] = allBookIds.filter((bookId) => Canon.isBookNT(bookId));
  const deuteroCanonIds: string[] = allBookIds.filter((bookId) => Canon.isBookDC(bookId));

  const [selectedBookId, setSelectedBookId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const filteredGroupedBooks = {
    OT: oldTestamentIds.filter(
      (bookId) =>
        Canon.bookIdToEnglishName(bookId).includes(searchQuery) || bookId.includes(searchQuery),
    ),
    NT: newTestamentIds.filter(
      (bookId) =>
        Canon.bookIdToEnglishName(bookId).includes(searchQuery) || bookId.includes(searchQuery),
    ),
    DC: deuteroCanonIds.filter(
      (bookId) =>
        Canon.bookIdToEnglishName(bookId).includes(searchQuery) || bookId.includes(searchQuery),
    ),
  };

  const handleSelectBook = (bookId: string) => {
    setSelectedBookId(bookId);
    handleSubmit({
      bookNum: Canon.bookIdToNumber(bookId),
      chapterNum: 1,
      verseNum: 1,
    });
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
          {Object.entries(filteredGroupedBooks).map(([bookType, bookIds]) => (
            <div key={bookType}>
              <SlMenuLabel>{bookTypeLabels[bookType]}</SlMenuLabel>
              {bookIds.map((bookId) => (
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
                        endChapter={getChaptersForBook(Canon.bookIdToNumber(bookId))}
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
