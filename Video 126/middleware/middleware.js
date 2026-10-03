/**
 * ==========================================================================
 * Sigma Web Development Course - Video 126
 * Topic: Next.js Middleware
 * File: middleware.js
 * 
 * Description:
 *   Intercepting requests, checking cookies, and handling redirects or authentication with middleware.js.
 * ==========================================================================
 */
// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     // return NextResponse.json({ message: 'Hello from the about page' })
//   return NextResponse.redirect(new URL('/', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }


import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}