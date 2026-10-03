/**
 * ==========================================================================
 * Sigma Web Development Course - Video 108
 * Topic: React Component Lifecycle (useEffect)
 * File: .eslintrc.cjs
 * 
 * Description:
 *   Handling side effects, API fetching, subscriptions, and cleanup functions with useEffect.
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
