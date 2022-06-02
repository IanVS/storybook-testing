import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { EventList } from "./EventList";

const meta: ComponentMeta<typeof EventList> = {
  title: "EventList",
  component: EventList,
};

export default meta;

type Story = ComponentStoryObj<typeof EventList>;

export const Empty: Story = {
  args: {
    events: [],
  },
};

export const Events: Story = {
  args: {
    events: [
      { date: new Date("2022-08-13"), title: "JavaScript for the rest of us" },
      { date: new Date("2022-09-10"), title: "Web3, is it real?" },
    ],
  },
};
