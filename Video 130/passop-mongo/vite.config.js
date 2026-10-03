/**
 * ==========================================================================
 * Sigma Web Development Course - Video 130
 * Topic: Project: PassOP - Password Manager
 * File: vite.config.js
 * 
 * Description:
 *   Full-stack password manager app with React/Next.js frontend, MongoDB storage, and copy-to-clipboard.
 * ==========================================================================
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
