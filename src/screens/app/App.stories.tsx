import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import App from "./App";

const meta: ComponentMeta<typeof App> = {
  title: "App",
  component: App,
};

export default meta;

type Story = ComponentStoryObj<typeof App>;

export const Standard: Story = {};
