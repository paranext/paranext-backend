import {
  SlInput,
  SlIcon,
  SlMenu,
  SlMenuLabel,
  SlDivider,
  SlDetails,
} from '@shoelace-style/shoelace/dist/react';
import { Canon } from '@sillsdev/scripture';
// import { useState } from 'react';
import { getChaptersForBook } from 'platform-bible-utils';
import { useState } from 'react';
import BookMenuItem from './book-menu-item.component';
import './book-chapter-control.component.css';
import ChapterSelect from './chapter-select.component';

// function BookDetails(bookId: string) {
//   return (
//     <SlDetails summary="Chapters">
//       <ChapterSelect endChapter={getChaptersForBook(Canon.bookIdToNumber(bookId))} />
//     </SlDetails>
//   );
// }

function BookChapterControl() {
  const { allBookIds } = Canon;
  const oldTestamentIds: string[] = allBookIds.filter((bookId) => Canon.isBookOT(bookId));
  // const newTestamentIds: string[] = allBookIds.filter((bookId) => Canon.isBookNT(bookId));
  // const deuteroCanonIds: string[] = allBookIds.filter((bookId) => Canon.isBookDC(bookId));

  const [selectedBook, setSelectedBook] = useState<string>('');

  const handleMenuItemClick = (bookId: string) => {
    setSelectedBook(bookId);
  };

  return (
    <div className="book-chapter-control">
      <SlInput placeholder="Deuteronomy 4:7" size="small">
        <SlIcon name="search" slot="prefix" />
        <SlIcon name="clock-history" slot="suffix" />
      </SlInput>

      <SlMenu className="menu">
        <SlMenuLabel>Old Testament</SlMenuLabel>
        {oldTestamentIds.map((bookId) => (
          <BookMenuItem
            key={bookId}
            bookId={bookId}
            handleSelect={() => handleMenuItemClick(bookId)}
            isSelected={selectedBook === bookId}
          >
            {selectedBook === bookId ? (
              <div className="selected-book-details">
                <SlDetails summary={Canon.bookIdToEnglishName(selectedBook)}>
                  <ChapterSelect
                    endChapter={getChaptersForBook(Canon.bookIdToNumber(selectedBook))}
                  />
                </SlDetails>
              </div>
            ) : undefined}
          </BookMenuItem>
        ))}
        <SlDivider />

        {/* <SlMenuLabel>Deuterocanon</SlMenuLabel>
        {deuteroCanonIds.map((bookId) => (
          <BookMenuItem
            key={bookId}
            bookId={bookId}
            handleSelect={() => handleSelect(bookId)}
            isSelected={selectedBook === bookId}
          />
        ))}
        <SlDivider />

        <SlMenuLabel>New Testament</SlMenuLabel>
        {newTestamentIds.map((bookId) => (
          <BookMenuItem
            key={bookId}
            bookId={bookId}
            handleSelect={() => handleSelect(bookId)}
            isSelected={selectedBook === bookId}
          />
        ))} */}

        {/* {selectedBook && (
          <div className="selected-book-details">
            <SlDetails summary={Canon.bookIdToEnglishName(selectedBook)}>
              <ChapterSelect endChapter={getChaptersForBook(Canon.bookIdToNumber(selectedBook))} />
            </SlDetails>
          </div>
        )} */}
      </SlMenu>
    </div>
  );
}

export default BookChapterControl;

/**
 * Things to look into more:
 *
 * If you import from /dist/react/specific-component, get build error 'rollup failed to resolve'
 *
 * Code Completion VS Code- Add line to .vscode/settings.json "html.customData":
 * ["./node_modules/@shoelace-style/shoelace/dist/vscode.html-custom-data.json"]
 *
 * Using ::part() https://developer.mozilla.org/en-US/docs/Web/CSS/::part
 */

/**
 * TODO: Why shoelace figma is different than others
 *
 * TODO: Icons copied to local dist- icons won't display even when copied- content security policy?
 * and 404
 *
 * TODO: Set base path, where to do it
 *
 * TODO: Ask about this:
 *
 * Npm i in core empties packages in p-b-r, npm i in p-b-r doesn't run react-data-grid patch, so
 * build fails. Have to npm i in core, but then shoelace is added to core packages
 */
