/**
 * ==========================================================================
 * Sigma Web Development Course - Video 123
 * Topic: Routing & Dynamic Routes in Next.js
 * File: next.config.mjs
 * 
 * Description:
 *   Defining static pages, dynamic route folders ([id]), catch-all routes, and navigation with next/link.
 * ==========================================================================
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'www.menucool.com',
            port: '', 
          },
        ],
      },
};

export default nextConfig;
