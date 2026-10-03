/**
 * ==========================================================================
 * Sigma Web Development Course - Video 127
 * Topic: Authentication with NextAuth / Auth.js
 * File: tailwind.config.js
 * 
 * Description:
 *   Implementing secure OAuth (GitHub, Google) and session management in Next.js applications.
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
