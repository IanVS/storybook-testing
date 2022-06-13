import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

import App from "./App";

const meta: ComponentMeta<typeof App> = {
  title: "App",
  component: App,
  parameters: {
    msw: {
      handlers: [
        rest.get(
          "https://semjs.cdn.prismic.io/api/v2/documents/search?q=%5B%5Bat%28document.type%2C+%22event%22%29%5D%5D&pageSize=100",
          (req, res, ctx) => {
            return res(
              ctx.json({
                results: [],
              })
            );
          }
        ),
      ],
    },
  },
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

export const SingleEvent: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          "https://semjs.cdn.prismic.io/api/v2/documents/search?q=%5B%5Bat%28document.type%2C+%22event%22%29%5D%5D&pageSize=100",
          (req, res, ctx) => {
            return res(
              ctx.json({
                results: [{ data: { title: [{ text: "A super cool event" }], date: "2022-06-13" } }],
              })
            );
          }
        ),
      ],
    },
  },
};
