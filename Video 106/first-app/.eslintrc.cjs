/**
 * ==========================================================================
 * Sigma Web Development Course - Video 106
 * Topic: React Components, Props & JSX
 * File: .eslintrc.cjs
 * 
 * Description:
 *   Creating reusable functional components, passing data via props, and JSX templating rules.
 * ==========================================================================
 */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
