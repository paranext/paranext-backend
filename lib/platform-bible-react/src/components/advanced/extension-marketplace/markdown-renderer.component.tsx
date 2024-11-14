import { cn } from '@/utils/shadcn-ui.util';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';
import { useMemo } from 'react';

interface MarkdownRendererProps {
  /** Optional unique identifier */
  id?: string;
  /** The markdown string to render */
  markdown: string;
  className?: string;
  /**
   * The []`target` attribute for `a` html
   * tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target). Defaults to `_self`
   */
  anchorTarget?: string;
}

/**
 * This component renders markdown content given a markdown string. It uses typography styles from
 * the platform.
 *
 * @param markdown The markdown string to render.
 * @param id Optional unique identifier
 * @returns A div containing the rendered markdown content.
 */
export default function MarkdownRenderer({
  id,
  markdown,
  className,
  anchorTarget,
}: MarkdownRendererProps) {
  const options: MarkdownToJSX.Options = useMemo(
    () => ({
      overrides: {
        a: {
          props: {
            target: anchorTarget ?? '_self',
          },
        },
      },
    }),
    [anchorTarget],
  );
  return (
    <div id={id} className={cn('pr-twp tw-prose', className)}>
      <Markdown options={options}>{markdown}</Markdown>
    </div>
  );
}
