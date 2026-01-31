import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'legacy/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
]
