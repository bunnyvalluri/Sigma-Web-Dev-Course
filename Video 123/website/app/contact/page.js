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
import Script from 'next/script'

const contact = () => {
  return (
    <div>
        <Script>
            {`alert("Wecome to contact page");`}
        </Script>
      this is contact
    </div>
  )
}

export default contact

export const metadata = {
    title: "Contact Facebook - Connect with the world",
    description: "This is a page where you can contact facebook and we can connect with the world using facebook",
  };