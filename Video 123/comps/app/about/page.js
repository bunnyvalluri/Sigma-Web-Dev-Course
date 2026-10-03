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

const page = () => {
    return (
        <div>
            <Script>
                {`alert("hello")`}
            </Script>
            I am about
        </div>
    )
}

export default page

export const metadata = {
    title: 'About - facebook.com',
    description: 'facebook is a social media platform',
}
