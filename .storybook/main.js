const { mergeConfig } = require("vite");

module.exports = {
  stories: [
    "./Introduction.stories.mdx",
    {
      directory: "../src/components/atoms",
      titlePrefix: "Atoms",
    },
    {
      directory: "../src/components/molecules",
      titlePrefix: "Molecules",
    },
    {
      directory: "../src/screens",
      titlePrefix: "Screens",
    },
  ],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          "@storybook/react/dist/esm/client/docs/config",
          "@storybook/react/dist/esm/client/preview/config",
          "@storybook/addon-a11y/preview.js",
          "@storybook/addon-docs/preview.js",
          "@storybook/addon-actions/preview.js",
          "@storybook/addon-backgrounds/preview.js",
          "@storybook/addon-measure/preview.js",
          "@storybook/addon-outline/preview.js",
          "@storybook/addon-interactions/preview.js",
        ],
      },
    });
  },
};
