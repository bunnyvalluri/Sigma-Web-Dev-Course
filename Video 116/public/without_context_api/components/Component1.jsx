/**
 * ==========================================================================
 * Sigma Web Development Course - Video 116
 * Topic: Global State with React Context API
 * File: Component1.jsx
 * 
 * Description:
 *   Eliminating prop drilling by creating Contexts, Providers, and consuming shared state with useContext.
 * ==========================================================================
 */
import React from 'react'

const Component1 = ({count}) => {
  return (
    <div>
     {count}
    </div>
  )
}

export default Component1
