import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Example/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    name: 'testSwitch',
    label: 'Enable feature',
    value: false,
    handleChangeValue: () => alert('Switched!'),
  },
};