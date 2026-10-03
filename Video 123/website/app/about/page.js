/**
 * ==========================================================================
 * Sigma Web Development Course - Video 123
 * Topic: Routing & Dynamic Routes in Next.js
 * File: page.js
 * 
 * Description:
 *   Defining static pages, dynamic route folders ([id]), catch-all routes, and navigation with next/link.
 * ==========================================================================
 */
import React from 'react'

const about = () => {
  return (
    <div>
      About
    </div>
  )
}

export default about

export const metadata = {
    title: "About Facebook - Connect with the world",
    description: "This is about facebook and we can connect with the world using facebook",
  };