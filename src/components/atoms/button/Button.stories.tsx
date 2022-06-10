import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: ComponentMeta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
  },
  args: {
    label: "Button",
  },
};

export default meta;

type Story = ComponentStoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const Secondary: Story = {
  args: {},
};

export const Large = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};
