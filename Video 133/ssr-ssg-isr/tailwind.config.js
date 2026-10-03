/**
 * ==========================================================================
 * Sigma Web Development Course - Video 133
 * Topic: Next.js Rendering Strategies: SSR, SSG & ISR
 * File: tailwind.config.js
 * 
 * Description:
 *   Comparing Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR).
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
