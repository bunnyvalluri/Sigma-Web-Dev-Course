/**
 * ==========================================================================
 * Sigma Web Development Course - Video 130
 * Topic: Project: PassOP - Password Manager
 * File: .eslintrc.cjs
 * 
 * Description:
 *   Full-stack password manager app with React/Next.js frontend, MongoDB storage, and copy-to-clipboard.
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
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
