/**
 * ==========================================================================
 * Sigma Web Development Course - Video 123
 * Topic: Routing & Dynamic Routes in Next.js
 * File: Navbar.js
 * 
 * Description:
 *   Defining static pages, dynamic route folders ([id]), catch-all routes, and navigation with next/link.
 * ==========================================================================
 */
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-slate-800 text-white py-4'>
        <div className="logo font-bold">Facebook</div>
        <ul className='flex gap-6'>
            <a href='/'><li>Home</li></a>
            <a href='/about'><li>About</li></a>
            <a href='/contact'><li>Contact</li></a>
        </ul>
    </nav>
  )
}

export default Navbar
