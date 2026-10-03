/**
 * ==========================================================================
 * Sigma Web Development Course - Video 136
 * Topic: Project: BitLinks - URL Shortener App
 * File: tailwind.config.js
 * 
 * Description:
 *   Full-stack URL shortener application with short link generation, redirection routes, and MongoDB.
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
