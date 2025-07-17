import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large", "full"],
    },
    state: {
      control: "select",
      options: ["debouncing-error", "untouched", "error", "valid", "disabled"],
    },
    type: {
      control: "select",
      options: ["text", "password", "email"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
  },
};

export const ErrorState: Story = {
    args: {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      value: "invalid-email",
      state: "error",
    },
  };
  
  export const ValidState: Story = {
    args: {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      value: "test@example.com",
      state: "valid",
    },
  };
  
  export const DisabledState: Story = {
    args: {
      name: "email",
      label: "Email",
      placeholder: "Cannot edit",
      value: "readonly@example.com",
      state: "disabled",
    },
  };  

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    value: "",
    size: "medium",
    state: "untouched",
  },
};

const ControlledInput = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      name="username"
      label="Username"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter username"
      size="medium"
      state="valid"
      floatingLabel
    />
  );
};

export const FloatingLabel: Story = {
  render: () => <ControlledInput />,
};