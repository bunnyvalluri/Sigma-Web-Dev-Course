/**
 * ==========================================================================
 * Sigma Web Development Course - Video 114
 * Topic: Project: iTask - Todo Planner App
 * File: vite.config.js
 * 
 * Description:
 *   Full React CRUD application with local storage persistence, edit/delete tasks, and Tailwind CSS.
 * ==========================================================================
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
