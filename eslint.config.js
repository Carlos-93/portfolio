import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['dist/', 'node_modules/']),
    js.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
            globals: {
                window: 'readonly',
                document: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': typescript,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...typescript.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
    },
]);