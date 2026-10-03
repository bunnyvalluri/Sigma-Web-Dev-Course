/**
 * ==========================================================================
 * Sigma Web Development Course - Video 105
 * Topic: Introduction to React.js
 * File: App.test.js
 * 
 * Description:
 *   Why React: Understanding Single Page Applications, Virtual DOM, JSX, and component-based architecture.
 * ==========================================================================
 */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
