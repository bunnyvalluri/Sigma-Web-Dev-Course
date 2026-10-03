/**
 * ==========================================================================
 * Sigma Web Development Course - Video 114
 * Topic: Project: iTask - Todo Planner App
 * File: .eslintrc.cjs
 * 
 * Description:
 *   Full React CRUD application with local storage persistence, edit/delete tasks, and Tailwind CSS.
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
