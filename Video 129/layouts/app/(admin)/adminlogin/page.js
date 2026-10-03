/**
 * ==========================================================================
 * Sigma Web Development Course - Video 129
 * Topic: Next.js Layouts & Metadata
 * File: page.js
 * 
 * Description:
 *   Configuring dynamic SEO metadata, Open Graph tags, and layout hierarchies in Next.js.
 * ==========================================================================
 */
import React from 'react'

const page = () => {
  return (
    <div>
      Admin Login 
      <p>Feel free to login as an Admin</p>
    </div>
  )
}

export default page


// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: 'AdminLogin Facebook - Connect with friends and the world around you',
  }
}