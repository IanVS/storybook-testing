import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { EventForm } from "./EventForm";

const meta: ComponentMeta<typeof EventForm> = {
  title: "EventForm",
  component: EventForm,
};

export default meta;

type Story = ComponentStoryObj<typeof EventForm>;

export const Empty: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    errorMessage: "An error occurred",
  },
};
