import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Slider from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Example/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

const SliderWrapper = () => {
  const [value, setValue] = useState(50);
  return (
    <Slider
      label="Volume"
      value={value}
      min={0}
      max={100}
      step={1}
      getValueCallback={setValue}
    />
  );
};

export const Default: Story = {
  render: () => <SliderWrapper />,
};