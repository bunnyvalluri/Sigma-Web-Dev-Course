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
import Link from 'next/link' 

const Navbar = () => {
  return (
    <nav className='flex justify-between px-4 bg-slate-800 text-white py-4'>
        <div className="logo font-bold">Facebook</div>
        <ul className='flex gap-6'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar