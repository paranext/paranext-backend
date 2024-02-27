import useSetting from '@renderer/hooks/papi-hooks/use-setting.hook';
import { Toolbar, BookChapterControl, ScriptureReference } from 'platform-bible-react';
import { handleMenuCommand } from './platform-bible-menu.commands';
import { handleMenuData } from './platform-bible-menu.data';

const defaultScrRef: ScriptureReference = {
  bookNum: 1,
  chapterNum: 1,
  verseNum: 1,
};

// TODO: Use resetScrRef?

export default function PlatformBibleToolbar() {
  const [scrRef, setScrRef] = useSetting('platform.verseRef', defaultScrRef);

  const handleReferenceChanged = (newScrRef: ScriptureReference) => {
    setScrRef(newScrRef);
    // logger.info(
    //   `Setting scrRef to ${newScrRef.bookNum} ${newScrRef.chapterNum} ${newScrRef.verseNum}`,
    // );
  };

  return (
    <Toolbar className="toolbar" dataHandler={handleMenuData} commandHandler={handleMenuCommand}>
      <BookChapterControl handleSubmit={handleReferenceChanged} scrRef={scrRef} />
    </Toolbar>
  );
}
