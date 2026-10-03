/**
 * ==========================================================================
 * Sigma Web Development Course - Video 106
 * Topic: React Components, Props & JSX
 * File: Navbar.jsx
 * 
 * Description:
 *   Creating reusable functional components, passing data via props, and JSX templating rules.
 * ==========================================================================
 */
import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
