// @ts-check

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import compat from "eslint-plugin-compat";

export default defineConfig(
  {
    ignores: ["public/**", "dist/**", "node_modules/**"]
  },
  js.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  compat.configs["flat/recommended"]
);