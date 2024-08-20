// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import jest from "eslint-plugin-jest";
import prettier from "eslint-plugin-prettier";
import globals from 'globals';

import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from '@eslint/compat'
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

/** @type { import("eslint").Linter.Config[] } */
const recipeEslintConfig = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  ...fixupConfigRules(compat.config({
    extends: [
      "next/core-web-vitals",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "prettier"
    ]
  })),

  ...compat.config({
    settings: {
      react: {
        version: "detect"
      }
    },
  }),

  {
      ignores: ["dist/", ".next/", "**/*.test.js", 'public/sw.js', 'public/workbox-*.js']
  },

  {
    files: ["src/**/*"],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        project: true,
        warnOnUnsupportedTypeScriptVersion: false,
        ecmaFeatures: {
          jsx: true
        },

        globals: {
          ...globals.browser,
          ...globals.node
        }
      }
    },

    plugins: {
      "@typescript-eslint": tseslint.plugin,
      jest,
      prettier
    },

    rules: {
      semi: "error",

      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          trailingComma: "none",
          semi: true,
          useTabs: false,
          tabWidth: 2,
          endOfLine: "auto"
        }
      ],

      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" }
      ],
      "@typescript-eslint/no-empty-function": [
        "error",
        {
          allow: ["arrowFunctions"]
        }
      ],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
    }
  }
];

export default recipeEslintConfig;
