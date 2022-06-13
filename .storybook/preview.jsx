import { PrismicProvider } from "@prismicio/react";
import { client } from "../src/prismic";

import "../src/global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "#323230",
      },
    ],
  },
};

export const decorators = [prismicDecorator];

function prismicDecorator(story) {
  return <PrismicProvider client={client}>{story()}</PrismicProvider>;
}
