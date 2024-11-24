import {defineConfig} from '@bfra.me/eslint-config'

export default defineConfig({
  name: '@bfra.me/github-action',
  ignores: ['dist/**', '**/*.test.ts'],
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  vitest: true,
})
