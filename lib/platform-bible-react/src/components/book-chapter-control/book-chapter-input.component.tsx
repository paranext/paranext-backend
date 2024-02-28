import { SlInput, SlIcon } from '@shoelace-style/shoelace/dist/react';
import SlInputElement from '@shoelace-style/shoelace/dist/components/input/input';
import './book-chapter-input.component.css';

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
    <SlInput
      className="book-chapter-input"
      placeholder={placeholder}
      size="small"
      type="text"
      value={value}
      // eslint-disable-next-line no-type-assertion/no-type-assertion
      onSlInput={(event) => handleSearch((event.target as SlInputElement).value)}
      onClick={handleClick}
    >
      <SlIcon name="search" slot="prefix" />
      <SlIcon name="clock-history" slot="suffix" />
    </SlInput>
  );
}

export default BookChapterInput;