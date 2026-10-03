/**
 * ==========================================================================
 * Sigma Web Development Course - Video 109
 * Topic: React DOM Access (useRef)
 * File: vite.config.js
 * 
 * Description:
 *   Accessing DOM elements directly and persisting mutable values across renders without re-rendering using useRef.
 * ==========================================================================
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
