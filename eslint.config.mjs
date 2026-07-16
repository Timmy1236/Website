// @ts-check

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import compat from "eslint-plugin-compat";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
	{
		ignores: ["public/**", "dist/**", "node_modules/**", "scripts/**"]
	},
	stylistic.configs.recommended,
	js.configs.recommended,
	tseslint.configs.strict,
	tseslint.configs.stylistic,
	{
		files: ["src/**/*.ts", "src/**/*.tsx"],
		languageOptions: {
			parserOptions: {
				projectService: true
			}
		}
	},
	compat.configs["flat/recommended"],
	{
		plugins: {
			"@stylistic": stylistic
		},
		rules: {
			"@stylistic/semi": ["error", "always"],
			"@stylistic/quotes": ["error", "double"],
			"@stylistic/indent": ["error", "tab"],
			"@stylistic/comma-dangle": ["error", "never"],
			"@stylistic/eol-last": ["error", "never"],
			"@stylistic/no-tabs": "off",
			"@stylistic/max-statements-per-line": ["error", { max: 2 }]
		}
	}
]);