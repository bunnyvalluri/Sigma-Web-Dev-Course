/**
 * ==========================================================================
 * Sigma Web Development Course - Video 118
 * Topic: Optimizing Callbacks (useCallback)
 * File: Navbar.jsx
 * 
 * Description:
 *   Memoizing callback functions in React to prevent re-instantiation across component renders.
 * ==========================================================================
 */
import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
      I am a {adjective} Navbar
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
