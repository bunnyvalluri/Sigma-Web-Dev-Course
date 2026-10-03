/**
 * ==========================================================================
 * Sigma Web Development Course - Video 135
 * Topic: Styling Strategies in Next.js
 * File: tailwind.config.js
 * 
 * Description:
 *   Exploring CSS Modules (.module.css), Tailwind CSS, and global styles in Next.js applications.
 * ==========================================================================
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
