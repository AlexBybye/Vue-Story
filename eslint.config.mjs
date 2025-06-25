import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1. 忽略配置（保持最前）
  {
    ignores: [
      "disk/**",
      "node_modules/**",
      "**/shims-vue.d.ts"
    ]
  },

  // 2. 基础配置（无文件限定）
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],

  // 3. 主规则配置（JS/TS文件）
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node  // 如果需要 Node 全局变量
      }
    },
    rules: {
      // 通用规则
      'no-var': 'error',
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unexpected-multiline': 'error',
      'no-useless-escape': 'off',
      
      // TypeScript 规则
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/semi': 'off'
    }
  },

  // 4. Vue 文件专属配置
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: pluginVue.parser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.vue']
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      // Vue 特定规则
      'vue/multi-word-component-names': 'off',
      'vue/no-mutating-props': 'off',
      'vue/attribute-hyphenation': 'off',
      
      // 在 Vue 文件中禁用 TS 规则
      '@typescript-eslint/no-unused-vars': 'off'
    }
  }
]);