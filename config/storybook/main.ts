import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  webpackFinal: async (config) => {
    // 1. Исключаем SVG из asset/resource
    if (config.module?.rules) {
      config.module.rules = config.module.rules.map((rule) => {
        if (
          rule &&
          typeof rule === 'object' &&
          'type' in rule &&
          rule.type === 'asset/resource' &&
          rule.test &&
          (typeof rule.test === 'string' || rule.test instanceof RegExp)
        ) {
          // Удаляем 'svg|' из регулярки
          const testStr = rule.test.toString();
          if (testStr.includes('svg')) {
            return {
              ...rule,
              test: new RegExp(
                testStr
                  .replace(/\bsvg\|?/g, '') // Удаляем svg и возможный |
                  .replace(/^\/|\/[a-z]*$/g, '') // Удаляем / в начале и флаги в конце
              ),
            };
          }
        }
        return rule;
      });
    }

    // 2. Добавляем отдельное правило для SVG через @svgr/webpack
    config.module?.rules?.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'convertColors',
                  params: {
                    currentColor: true,
                  },
                },
              ],
            },
          },
        },
      ],
      type: 'javascript/auto', // Важно! Иначе может конфликтовать с asset modules
    });

    return config;
  },
};
export default config;