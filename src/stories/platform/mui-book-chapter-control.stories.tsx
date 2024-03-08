import { useArgs } from '@storybook/client-api';
import type { Meta, StoryObj } from '@storybook/react';
import { MuiBookChapterControl, MuiBookChapterControlProps } from 'platform-bible-react';
import { ScriptureReference } from 'platform-bible-utils';
import { ReactElement } from 'react';

function MuiBookChapterControlDecorator(
  Story: (update?: { args: Partial<MuiBookChapterControlProps> }) => ReactElement,
) {
  const [args, updateArgs] = useArgs();

  const handleSubmit = (scrRef: ScriptureReference) => {
    updateArgs({ scrRef });
  };

  return (
    <Story
      args={{
        ...args,
        handleSubmit,
      }}
    />
  );
}

const meta: Meta<typeof MuiBookChapterControl> = {
  title: 'Platform/MuiBookChapterControl',
  component: MuiBookChapterControl,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [MuiBookChapterControlDecorator],
};
export default meta;

type Story = StoryObj<typeof MuiBookChapterControl>;

const defaultScrRef: ScriptureReference = { bookNum: 5, chapterNum: 4, verseNum: 3 };

export const Default: Story = {
  args: {
    scrRef: defaultScrRef,
  },
};
