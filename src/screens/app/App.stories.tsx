import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import App from "./App";

const meta: ComponentMeta<typeof App> = {
  title: "App",
  component: App,
};

export default meta;

type Story = ComponentStoryObj<typeof App>;

export const Standard: Story = {};

export const SuggestionError: Story = {
  play: async ({ canvasElement }) => {
    const { getByLabelText, getByRole } = within(canvasElement);
    const input = getByLabelText("Proposed event topic");
    await userEvent.type(input, "uh");
    await userEvent.click(getByRole("button", { name: "Submit" }));
    await expect(input).toHaveAccessibleDescription("Can we have some more detail?");
  },
};
