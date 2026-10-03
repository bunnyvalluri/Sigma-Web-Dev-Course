/**
 * ==========================================================================
 * Sigma Web Development Course - Video 128
 * Topic: Layouts, Templates & Nested Routes
 * File: not-found.js
 * 
 * Description:
 *   Structuring shared UI layouts, navigation headers, and metadata across nested routes in Next.js.
 * ==========================================================================
 */
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Not Found</h2>
        <p className="text-lg text-gray-600">Could not find requested resource</p>
        <Link href="/" className="text-blue-500 hover:underline">Return Home</Link>
    </div>
  )
}