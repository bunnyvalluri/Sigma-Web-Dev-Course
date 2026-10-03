/**
 * ==========================================================================
 * Sigma Web Development Course - Video 137
 * Topic: Project: LinkTree Clone - Link-in-Bio App
 * File: tailwind.config.js
 * 
 * Description:
 *   Full-stack link-in-bio platform allowing users to claim handles, add social links, and display profile pages.
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
