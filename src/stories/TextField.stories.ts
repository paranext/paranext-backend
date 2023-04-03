import type { Meta, StoryObj } from '@storybook/react';
import TextField from '@renderer/components/papi-components/text-field.component';

const meta: Meta<typeof TextField> = {
  title: 'Basics/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [0, 1],
      mapping: ['outlined', 'filled'],
      control: {
        type: 'select',
        labels: ['Outlined', 'Filled'],
      },
    },
    helperText: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    isDisabled: { control: 'boolean' },
    hasError: { control: 'boolean' },
    isFullWidth: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    className: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: { isDisabled: true },
};

export const ErrorState: Story = {
  args: { hasError: true, helperText: 'Something is wrong with your input' },
};

export const FullWidth: Story = {
  args: { isFullWidth: true },
};

export const HelperText: Story = {
  args: { helperText: 'This is helper text' },
};

export const Placeholder: Story = {
  args: {
    placeholder: 'This is placeholder text',
  },
};

export const Label: Story = {
  args: { label: 'This is a label' },
};

export const Required: Story = {
  args: {
    label: 'This field is required',
    isRequired: true,
  },
};

export const Events: Story = {
  args: {
    onChange() {
      // eslint-disable-next-line no-console
      console.log('Changed');
    },
    onBlur() {
      // eslint-disable-next-line no-console
      console.log('Lost focus');
    },
    onFocus() {
      // eslint-disable-next-line no-console
      console.log('Got focus');
    },
  },
};
