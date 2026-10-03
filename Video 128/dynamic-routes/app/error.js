'use client'

/**
 * ==========================================================================
 * Sigma Web Development Course - Video 128
 * Topic: Layouts, Templates & Nested Routes
 * File: error.js
 * 
 * Description:
 *   Structuring shared UI layouts, navigation headers, and metadata across nested routes in Next.js.
 * ==========================================================================
 */
// Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}