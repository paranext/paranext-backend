import { MenuItem, ListItemText, ListItemIcon } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { Canon } from '@sillsdev/scripture';
// import './book-menu-item.component.css';
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
      <MenuItem
        key={bookId}
        value={bookId}
        className={isSelected ? 'selected-menu-item' : 'menu-item'}
        onClick={() => handleSelectBook(bookId)}
      >
        {isSelected ? (
          <ListItemIcon>
            <div className={`selected-book-color-label ${bookType.toLowerCase()}`} slot="prefix" />
          </ListItemIcon>
        ) : (
          <ListItemIcon>
            <div className={`book-color-label ${bookType.toLowerCase()}`} slot="prefix" />
          </ListItemIcon>
        )}
        <ListItemText>{Canon.bookIdToEnglishName(bookId)}</ListItemText>
        {isSelected ? <KeyboardArrowUp /> : undefined}
      </MenuItem>
      {isSelected && children}
    </div> // todo play with moving children to inside menu item
  );
}

export default BookMenuItem;

// MUI using collapse as sibling
// Can move chapter select in here to avoid switching from parent > child to sibling
// eslint-disable-next-line no-lone-blocks
{
  /* <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse> */
}
