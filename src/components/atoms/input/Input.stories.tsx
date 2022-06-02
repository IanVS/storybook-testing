import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: ComponentMeta<typeof Input> = {
  title: "Input",
  component: Input,
};

export default meta;

type Story = ComponentStoryObj<typeof Input>;

export const Empty: Story = {
  args: {
    hasError: false,
  },
};

export const DefaultValue: Story = {
  args: {
    defaultValue: "Default",
  },
};

export const Error: Story = {
  args: {
    defaultValue: "Something's wrong",
    hasError: true,
  },
};
