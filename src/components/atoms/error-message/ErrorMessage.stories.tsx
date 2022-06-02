import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { ErrorMessage } from "./ErrorMessage";

const meta: ComponentMeta<typeof ErrorMessage> = {
  title: "ErrorMessage",
  component: ErrorMessage,
};

export default meta;

type Story = ComponentStoryObj<typeof ErrorMessage>;

export const Standard: Story = {
  args: {
    children: "There was a problem.",
  },
};
