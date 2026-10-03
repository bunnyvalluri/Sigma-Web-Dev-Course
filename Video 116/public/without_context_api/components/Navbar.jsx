/**
 * ==========================================================================
 * Sigma Web Development Course - Video 116
 * Topic: Global State with React Context API
 * File: Navbar.jsx
 * 
 * Description:
 *   Eliminating prop drilling by creating Contexts, Providers, and consuming shared state with useContext.
 * ==========================================================================
 */
import React from 'react'
import Button from './Button'

const Navbar = ({count}) => {
  return (
    <>
    <div>
      Navbar
    </div>
    <Button count={count}/>
    </>
  )
}

export default Navbar
