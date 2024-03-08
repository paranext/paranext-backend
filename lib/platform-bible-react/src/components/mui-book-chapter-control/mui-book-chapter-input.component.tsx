import { TextField } from '@mui/material';
import { Search, History } from '@mui/icons-material';
// import './book-chapter-input.component.css';

export type BookChapterInputProps = {
  handleSearch: (searchString: string) => void;
  handleClick: () => void;
  value: string;
  placeholder: string;
};

function BookChapterInput({
  handleSearch,
  handleClick,
  value,
  placeholder,
}: BookChapterInputProps) {
  return (
    <TextField
      className="book-chapter-input"
      placeholder={placeholder}
      size="small"
      type="text"
      value={value}
      // event.target has no value
      // eslint-disable-next-line no-type-assertion/no-type-assertion
      onInput={(event) => handleSearch((event.target as HTMLInputElement).value)}
      onClick={handleClick}
      InputProps={{
        startAdornment: <Search fontSize="small" />,
        endAdornment: <History fontSize="small" />,
      }}
    />
  );
}

export default BookChapterInput;
