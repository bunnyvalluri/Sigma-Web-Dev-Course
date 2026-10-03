/**
 * ==========================================================================
 * Sigma Web Development Course - Video 116
 * Topic: Global State with React Context API
 * File: vite.config.js
 * 
 * Description:
 *   Eliminating prop drilling by creating Contexts, Providers, and consuming shared state with useContext.
 * ==========================================================================
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
