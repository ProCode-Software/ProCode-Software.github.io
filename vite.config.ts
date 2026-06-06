import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite-plus'

export default defineConfig({
    fmt: {
        tabWidth: 4,
        singleQuote: true,
        arrowParens: 'avoid',
        objectWrap: 'collapse',
        semi: false,
        printWidth: 90,
        trailingComma: 'es5',
        useTabs: false,
        sortPackageJson: false,
        ignorePatterns: [],
        insertFinalNewline: true,
        sortImports: {
            newlinesBetween: false,
            partitionByComment: true,
            partitionByNewline: true,
            groups: [
                'wildcard-import',
                'default-import',
                ['builtin', 'external'],
                ['parent', 'sibling', 'index'],
                ['internal', 'subpath'],
                'type',
            ],
        },
    },
    lint: {
        jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
        rules: {
            'vite-plus/prefer-vite-plus-imports': 'error',
            'no-unused-expressions': ['warn', { allowShortCircuit: true }],
            'unicorn/no-empty-file': 'off',
        },
        options: { typeAware: true, typeCheck: true },
    },
    plugins: [sveltekit()],
})
