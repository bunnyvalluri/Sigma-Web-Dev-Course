/**
 * ==========================================================================
 * Sigma Web Development Course - Video 131
 * Topic: Project: GetMeAChai - Crowdfunding Platform
 * File: tailwind.config.js
 * 
 * Description:
 *   Full-stack creator funding platform with Razorpay payment integration, NextAuth, and MongoDB.
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
