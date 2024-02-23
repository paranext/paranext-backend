import './chapter-select.component.css';

export type ChapterSelectProps = {
  endChapter: number;
};

function ChapterSelect({ endChapter }: ChapterSelectProps) {
  const chapters = Array.from({ length: endChapter }, (_, i) => i + 1);

  return (
    <div className="chapter-select">
      {chapters.map((chapter) => (
        <div>{chapter}</div>
      ))}
    </div>
  );
}

export default ChapterSelect;
