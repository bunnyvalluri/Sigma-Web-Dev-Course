/**
 * ==========================================================================
 * Sigma Web Development Course - Video 115
 * Topic: Client-Side Routing with React Router
 * File: App.jsx
 * 
 * Description:
 *   Configuring createBrowserRouter, RouterProvider, Link, NavLink, and nested routes in React.
 * ==========================================================================
 */
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/user/:username",
      element: <><Navbar /><User /></>
    },
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App
