import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { EventDetails } from "./EventDetails";

const meta: ComponentMeta<typeof EventDetails> = {
  title: "EventDetails",
  component: EventDetails,
};

export default meta;

type Story = ComponentStoryObj<typeof EventDetails>;

export const Standard: Story = {
  args: {
    title: "Event Title",
    date: new Date("2022-06-13"),
  },
};
