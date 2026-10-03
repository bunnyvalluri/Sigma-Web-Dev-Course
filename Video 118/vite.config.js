/**
 * ==========================================================================
 * Sigma Web Development Course - Video 118
 * Topic: Optimizing Callbacks (useCallback)
 * File: vite.config.js
 * 
 * Description:
 *   Memoizing callback functions in React to prevent re-instantiation across component renders.
 * ==========================================================================
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
