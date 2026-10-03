/**
 * ==========================================================================
 * Sigma Web Development Course - Video 129
 * Topic: Next.js Layouts & Metadata
 * File: Navbar.js
 * 
 * Description:
 *   Configuring dynamic SEO metadata, Open Graph tags, and layout hierarchies in Next.js.
 * ==========================================================================
 */
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-blue-500">
      <div>
      <Link className="text-white text-lg mx-2" href="/"> Home 
      </Link>
        <Link className="text-white text-lg mx-2" href="/about">
          About
        </Link>
        <Link className="text-white text-lg mx-2" href="/contact"> Contact 
        </Link>
      </div>
    </nav>
  )
}

export default Navbar