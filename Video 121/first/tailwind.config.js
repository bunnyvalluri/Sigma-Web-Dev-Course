/**
 * ==========================================================================
 * Sigma Web Development Course - Video 121
 * Topic: Introduction to Next.js
 * File: tailwind.config.js
 * 
 * Description:
 *   Overview of Next.js App Router, file-based routing, server-side rendering, and performance benefits.
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
