"use client"

/**
 * ==========================================================================
 * Sigma Web Development Course - Video 132
 * Topic: Navigation Hooks in Next.js
 * File: Navbar.js
 * 
 * Description:
 *   Utilizing useRouter, usePathname, and useSearchParams for dynamic client-side navigation.
 * ==========================================================================
 */
import React from 'react'
import { usePathname } from "next/navigation";

const Navbar = () => {
    
  const pathname = usePathname()
  return (
    <div>

        <div>Navbar</div>
        <div>You are inside {pathname}</div>
    </div>
  )
}

export default Navbar