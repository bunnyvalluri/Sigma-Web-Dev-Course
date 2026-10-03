/**
 * ==========================================================================
 * Sigma Web Development Course - Video 115
 * Topic: Client-Side Routing with React Router
 * File: Navbar.jsx
 * 
 * Description:
 *   Configuring createBrowserRouter, RouterProvider, Link, NavLink, and nested routes in React.
 * ==========================================================================
 */
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/login"><li>Login</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
