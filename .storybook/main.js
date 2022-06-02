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
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
};
