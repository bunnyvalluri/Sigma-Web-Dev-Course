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
import React, { useContext } from 'react'
import { counterContext } from '../context/context'


const Component1 = () => {
  const value = useContext(counterContext)
  return (
    <div>
    {value.count}
    </div>
  )
}

export default Component1
