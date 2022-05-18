module.exports = {
  // stories: [
  //   "../stories/**/*.stories.mdx",
  //   "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  // ],
  stories: [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  // "addons": [
  //   "@storybook/addon-links",
  //   "@storybook/addon-essentials",
  //   "@storybook/addon-interactions",
  // ],
  // "framework": "@storybook/react"
  addons: [
    "@chakra-ui/storybook-addon",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  features: {
    emotionAlias: false,
  },
}