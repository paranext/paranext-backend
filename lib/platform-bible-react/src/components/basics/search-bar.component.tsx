import { Button } from '@/components/shadcn-ui/button';
import { Input } from '@/components/shadcn-ui/input';
import { cn } from '@/utils/shadcn-ui.util';
import { Search, X } from 'lucide-react';
import { useState } from 'react';

/** Props for the SearchBar component. */
export type SearchBarProps = {
  /**
   * Callback fired to handle the search query when button pressed
   *
   * @param searchQuery
   */
  onSearch: (searchQuery: string) => void;

  /** Optional string that appears in the search bar without a search string */
  placeholder?: string;

  /** Optional boolean to set the input base to full width */
  isFullWidth?: boolean;

  /** Additional css classes to help with unique styling of the search bar */
  className?: string;

  /** Text and layout direction */
  direction?: 'rtl' | 'ltr';
};

export default function SearchBar({
  onSearch,
  placeholder,
  isFullWidth,
  className,
  direction = 'ltr',
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (searchString: string) => {
    setSearchQuery(searchString);
    onSearch(searchString);
  };

  return (
    <div className="tw-relative">
      <Search
        className={cn(
          'tw-absolute tw-top-1/2 tw-h-4 tw-w-4 tw--translate-y-1/2 tw-transform tw-opacity-50',
          { 'tw-right-3': direction === 'rtl' },
          { 'tw-left-3': direction === 'ltr' },
        )}
      />
      <Input
        className={cn(
          'tw-flex tw-h-10 tw-w-full tw-text-ellipsis tw-rounded-md tw-border tw-border-input tw-bg-background tw-py-2 tw-pe-3 tw-pe-9 tw-ps-9 tw-text-sm tw-ring-offset-background file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-[color:hsl(240,5%,64.9%)] focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50',
          { 'tw-w-full': isFullWidth },
          className,
        )}
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      {searchQuery && (
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'tw-absolute tw-top-1/2 tw-h-7 tw--translate-y-1/2 tw-transform hover:tw-bg-transparent',
            { 'tw-left-0': direction === 'rtl' },
            { 'tw-right-0': direction === 'ltr' },
          )}
        >
          <X
            className="tw-h-4 tw-w-4"
            onClick={() => {
              handleInputChange('');
            }}
          />
          <span className="tw-sr-only">Clear</span>
        </Button>
      )}
    </div>
  );
}
