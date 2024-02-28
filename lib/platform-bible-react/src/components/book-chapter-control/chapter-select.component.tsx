import './chapter-select.component.css';

// todo active prop- selected chapter stays highlighted

export type ChapterSelectProps = {
  // The end chapter of the selected book
  endChapter: number;
  // Callback to run when a chapter div is selected
  handleSelectChapter: (chapterNumber: number) => void;
};

function ChapterSelect({ endChapter, handleSelectChapter }: ChapterSelectProps) {
  const chapters = Array.from({ length: endChapter }, (_, i) => i + 1);

  return (
    <div className="chapter-select">
      {chapters.map((chapter) => (
        // Fix this once selecting chapter is working
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div key={chapter} onClick={() => handleSelectChapter(chapter)}>
          {chapter}
        </div>
      ))}
    </div>
  );
}

export default ChapterSelect;
