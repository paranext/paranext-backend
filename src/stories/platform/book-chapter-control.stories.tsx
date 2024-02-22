import type { Meta, StoryObj } from '@storybook/react';
import { BookChapterControl } from 'platform-bible-react';

const meta: Meta<typeof BookChapterControl> = {
  title: 'Platform/BookChapterControl',
  component: BookChapterControl,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof BookChapterControl>;

export const Primary: Story = {};
