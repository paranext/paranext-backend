import { SlMenuItem } from '@shoelace-style/shoelace/dist/react';
import { Canon } from '@sillsdev/scripture';
import './book-menu-item.component.css';
import { PropsWithChildren } from 'react';

type BookMenuItemProps = PropsWithChildren<{
  // String id of book
  bookId: string;
  handleSelect: (bookId: string) => void;
  isSelected: boolean;
}>;

function BookMenuItem({ bookId, handleSelect, isSelected, children }: BookMenuItemProps) {
  // const [selectedBook, setSelectedBook] = useState('');

  // const handleSelect = (currentBookId: string) => {
  //   setSelectedBook(currentBookId);
  // };

  // {selectedBook === bookId ? 'selected-menu-item' : 'menu-item'}

  return (
    <div>
      <SlMenuItem
        key={bookId}
        value={bookId}
        className="menu-item"
        onClick={() => handleSelect(bookId)}
      >
        {Canon.bookIdToEnglishName(bookId)}
        {isSelected ? (
          <div className="selected-book-color-label" slot="prefix" />
        ) : (
          <div className="book-color-label" slot="prefix" />
        )}
      </SlMenuItem>
      {children}
    </div>
  );
}

export default BookMenuItem;
