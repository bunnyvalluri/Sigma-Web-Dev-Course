/**
 * ==========================================================================
 * Sigma Web Development Course - Video 105
 * Topic: Introduction to React.js
 * File: Navbar.js
 * 
 * Description:
 *   Why React: Understanding Single Page Applications, Virtual DOM, JSX, and component-based architecture.
 * ==========================================================================
 */
import React from 'react'
import Footer from './Footer'

const Navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <Footer/>
    </div>
  )
}

export default Navbar
