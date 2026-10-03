/**
 * ==========================================================================
 * Sigma Web Development Course - Video 115
 * Topic: Client-Side Routing with React Router
 * File: User.jsx
 * 
 * Description:
 *   Configuring createBrowserRouter, RouterProvider, Link, NavLink, and nested routes in React.
 * ==========================================================================
 */
import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
  return (
    <div>
      I am user {params.username}
    </div>
  )
}

export default User
