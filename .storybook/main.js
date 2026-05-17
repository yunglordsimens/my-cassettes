

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: '@storybook/react-vite',
  viteFinal: async (config, { configType }) => {
    // configType === 'PRODUCTION' при сборке, 'DEVELOPMENT' при dev-сервере
    if (configType === 'PRODUCTION') {
      config.base = '/my-cassettes/';
    }
    return config;
  },
};
export default config;