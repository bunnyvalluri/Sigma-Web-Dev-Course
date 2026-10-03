/**
 * ==========================================================================
 * Sigma Web Development Course - Video 106
 * Topic: React Components, Props & JSX
 * File: vite.config.js
 * 
 * Description:
 *   Creating reusable functional components, passing data via props, and JSX templating rules.
 * ==========================================================================
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
