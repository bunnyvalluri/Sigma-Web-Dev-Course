/**
 * ==========================================================================
 * Sigma Web Development Course - Video 120
 * Topic: Global State with Redux Toolkit
 * File: Navbar.jsx
 * 
 * Description:
 *   Setting up a Redux store, defining slices and reducers, and using useSelector & useDispatch hooks.
 * ==========================================================================
 */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      I am a navbar and counter is {count}
    </div>
  )
}

export default Navbar
