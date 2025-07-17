import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'default'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    tooltipPlacement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Danger Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Success Button',
  },
};

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Default Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Small Button',
  },
};

// // Story with tooltip
// export const WithTooltip: Story = {
//   args: {
//     variant: 'primary',
//     label: 'Hover Me',
//     tooltipText: 'This is a tooltip',
//     tooltipPlacement: 'bottom',
//   },
// };

// // Story with icon and badge
// export const WithIconAndBadge: Story = {
//   args: {
//     variant: 'success',
//     label: 'Notify',
//     badgeContent: 3,
//     startIcon: <i className="fa fa-bell" />,
//   },
// };

// export const LinkButton: Story = {
//   args: {
//     variant: 'primary',
//     label: 'Go to Google',
//     href: 'https://www.google.com',
//     tooltipText: 'Opens Google',
//     tooltipPlacement: 'top',
//   },
// };
