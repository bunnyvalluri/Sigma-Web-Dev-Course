/**
 * ==========================================================================
 * Sigma Web Development Course - Video 117
 * Topic: Performance Optimization (useMemo)
 * File: vite.config.js
 * 
 * Description:
 *   Memoizing computationally expensive calculations in React to prevent unnecessary recalculations.
 * ==========================================================================
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
