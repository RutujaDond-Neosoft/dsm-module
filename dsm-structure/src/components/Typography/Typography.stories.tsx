import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'body1', 'caption',
      ],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'warning', 'danger', 'success', 'default'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: 'h3',
    color: 'primary',
    children: 'Hello Typography',
  },
};