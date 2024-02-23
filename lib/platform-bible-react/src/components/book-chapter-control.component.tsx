import './book-chapter-control.component.css';
import {
  SlInput,
  SlIcon,
  SlMenu,
  SlMenuItem,
  SlMenuLabel,
  SlDivider,
} from '@shoelace-style/shoelace/dist/react';
import ChapterSelect from './chapter-select.component';

function BookChapterControl() {
  return (
    <div className="book-chapter-control">
      <SlInput placeholder="Deuteronomy 4:7" size="small">
        <SlIcon name="search" slot="prefix" />
        <SlIcon name="clock-history" slot="suffix" />
      </SlInput>
      <SlMenu className="menu">
        <SlMenuItem className="selected-menu-item">
          Deuteronomy
          <SlIcon slot="suffix" name="pin" />
        </SlMenuItem>
        <SlMenuLabel>Old Testament</SlMenuLabel>
        <SlMenuItem value="gen">
          Genesis
          <div className="book-color-label" slot="prefix" />
        </SlMenuItem>
        <SlMenuItem value="exo">
          Exodus
          <div className="book-color-label" slot="prefix" />
        </SlMenuItem>
        <SlMenuItem value="lev">
          Leviticus
          <div className="book-color-label" slot="prefix" />
        </SlMenuItem>
        <SlMenuItem value="num">
          Number
          <div className="book-color-label" slot="prefix" />
        </SlMenuItem>
        <SlMenuItem value="deu" className="selected-menu-item">
          Deuteronomy
          <div className="book-color-label" slot="prefix" />
          <SlIcon slot="suffix" name="chevron-up" />
        </SlMenuItem>
        {/* <sl-details summary="Chapters"> */}
        <ChapterSelect endChapter={34} />
        {/* </sl-details> */}
        <SlMenuItem value="jos">
          Joshua
          <div className="book-color-label" slot="prefix" />
        </SlMenuItem>
        <SlMenuItem value="jud">
          Judges
          <div className="book-color-label" slot="prefix" />
        </SlMenuItem>
        <SlDivider />
        <SlMenuLabel>Deuterocanon</SlMenuLabel>
        <SlMenuItem value="es1" disabled>
          1 Esdras
          <div className="book-color-label" slot="prefix" />
        </SlMenuItem>
        <SlMenuItem value="es2" disabled>
          2 Esdras
          <div className="book-color-label" slot="prefix" />
        </SlMenuItem>
        <SlMenuItem value="mc1" disabled>
          1 Maccabees
          <div className="book-color-label" slot="prefix" />
        </SlMenuItem>
        <SlMenuItem value="mc2" disabled>
          2 Maccabees
          <div className="book-color-label" slot="prefix" />
        </SlMenuItem>
        <SlDivider />
        <SlMenuLabel>New Testament</SlMenuLabel>
        <SlMenuItem value="mat">
          Matthew
          <div className="book-color-label" slot="prefix" />
        </SlMenuItem>
        <SlMenuItem value="mrk">
          Mark
          <div className="book-color-label" slot="prefix" />
        </SlMenuItem>
        <SlMenuItem value="luk">
          Luke
          <div className="book-color-label" slot="prefix" />
        </SlMenuItem>
      </SlMenu>
    </div>
  );
}

export default BookChapterControl;

/**
 * Smaller components within this one:
 *
 * Chapter Select - Grid of chapter numbers
 *
 * Input Dropdown
 *
 * Menu
 *
 * Menu items - Selected and non-selected
 */

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
 * TODO: Icons copied to local dist
 *
 * TODO: Set base path, where to do it
 *
 * TODO: Ask about this:
 *
 * Npm i in core empties packages in p-b-r, npm i in p-b-r doesn't run react-data-grid patch, so
 * build fails. Have to npm i in core, but then shoelace is added to core packages
 */
