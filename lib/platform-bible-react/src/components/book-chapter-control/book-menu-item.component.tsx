import { SlIcon, SlMenuItem } from '@shoelace-style/shoelace/dist/react';
import { Canon } from '@sillsdev/scripture';
import './book-menu-item.component.css';
import { PropsWithChildren } from 'react';

export type BookType = 'OT' | 'NT' | 'DC';

type BookMenuItemProps = PropsWithChildren<{
  // String id of book
  bookId: string;
  // Callback to run when a book menu item is selected
  handleSelectBook: (bookId: string) => void;
  // True if this menu item is currently selected
  isSelected: boolean;
  // Type of book associated with this menu item, coordinates color labels
  // ? Mock up has the labels coordinated to genre
  bookType: BookType;
}>;

function BookMenuItem({
  bookId,
  handleSelectBook,
  isSelected,
  bookType,
  children,
}: BookMenuItemProps) {
  return (
    <div>
      <SlMenuItem
        key={bookId}
        value={bookId}
        className={isSelected ? 'selected-menu-item' : 'menu-item'}
        onClick={() => handleSelectBook(bookId)}
      >
        {Canon.bookIdToEnglishName(bookId)}
        {isSelected ? (
          <>
            <div className={`selected-book-color-label ${bookType.toLowerCase()}`} slot="prefix" />
            <SlIcon name="chevron-up" slot="suffix" />
          </>
        ) : (
          <div className={`book-color-label ${bookType.toLowerCase()}`} slot="prefix" />
        )}
      </SlMenuItem>
      {isSelected && children}
    </div>
  );
}

export default BookMenuItem;
