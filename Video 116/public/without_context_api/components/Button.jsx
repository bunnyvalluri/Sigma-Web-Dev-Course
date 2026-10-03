/**
 * ==========================================================================
 * Sigma Web Development Course - Video 116
 * Topic: Global State with React Context API
 * File: Button.jsx
 * 
 * Description:
 *   Eliminating prop drilling by creating Contexts, Providers, and consuming shared state with useContext.
 * ==========================================================================
 */
import React from 'react'
import Component1 from './Component1'
const Button = ({count}) => {
  return (
    <div>
      <button><span><Component1 count={count}/></span>I am a button</button>
    </div>
  )
}

export default Button
