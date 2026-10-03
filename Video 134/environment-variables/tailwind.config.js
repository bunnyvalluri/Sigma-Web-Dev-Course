/**
 * ==========================================================================
 * Sigma Web Development Course - Video 134
 * Topic: Environment Variables in Next.js
 * File: tailwind.config.js
 * 
 * Description:
 *   Configuring .env.local, NEXT_PUBLIC_ client-exposed variables, and private server variables.
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
