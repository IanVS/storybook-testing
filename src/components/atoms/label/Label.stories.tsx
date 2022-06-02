import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Label } from "./Label";

const meta: ComponentMeta<typeof Label> = {
  title: "Label",
  component: Label,
};

export default meta;

type Story = ComponentStoryObj<typeof Label>;

export const Standard: Story = {
  args: {
    children: "Form label",
  },
};
