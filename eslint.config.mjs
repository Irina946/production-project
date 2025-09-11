// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import i18nextPlugin from "eslint-plugin-i18next";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                ecmaVersion: "latest",
                sourceType: "module",
            },
            globals: {
                ...globals.browser,
                __IS_DEV__: true,
            },
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
            react: pluginReact,
            i18next: i18nextPlugin
        },
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            pluginReact.configs.flat.recommended,

        ],
        rules: {
            "react/jsx-indent": ["error", 4],
            "react/jsx-indent-props": ["error", 4],
            indent: ["error", 4],
            "react/jsx-filename-extension": [
                "error",
                { extensions: [".js", ".jsx", ".tsx"] },
            ],
            "import/no-unresolved": "off",
            "import/prefer-default-export": "off",
            "no-unused-vars": "warn",
            "react/require-default-props": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-props-no-spreading": "warn",
            "react/function-component-definition": "off",
            "no-shadow": "off",
            "import/extensions": "off",
            "import/no-extraneous-dependencies": "off",
            "no-underscore-dangle": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "react/prop-types": "off",
            "no_underscore_dangle": "off",
            "i18next/no-literal-string": ["error", { markupOnly: true }],
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        files: ["**/*.json"],
        plugins: { json },
        language: "json/json",
        extends: ["json/recommended"],
    },
    {
        files: ["**/*.jsonc"],
        plugins: { json },
        language: "json/jsonc",
        extends: ["json/recommended"],
    },
    {
        files: ["**/*.json5"],
        plugins: { json },
        language: "json/json5",
        extends: ["json/recommended"],
    },
    {
        files: ["**/*.md"],
        plugins: { markdown },
        language: "markdown/commonmark",
        extends: ["markdown/recommended"],
    },
    {
        files: ["**/*.css"],
        plugins: { css },
        language: "css/css",
        extends: ["css/recommended"],
    },
    {
        files: ["**/*.tsx"],
        plugins: { i18next: i18nextPlugin },
        extends: [],
    },
    {
        files: ['**/src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off'
        },
    },
]);
