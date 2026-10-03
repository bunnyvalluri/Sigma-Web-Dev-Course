/**
 * ==========================================================================
 * Sigma Web Development Course - Video 132
 * Topic: Navigation Hooks in Next.js
 * File: tailwind.config.js
 * 
 * Description:
 *   Utilizing useRouter, usePathname, and useSearchParams for dynamic client-side navigation.
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
