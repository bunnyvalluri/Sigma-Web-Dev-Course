/**
 * ==========================================================================
 * Sigma Web Development Course - Video 115
 * Topic: Client-Side Routing with React Router
 * File: .eslintrc.cjs
 * 
 * Description:
 *   Configuring createBrowserRouter, RouterProvider, Link, NavLink, and nested routes in React.
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
