/**
 * ==========================================================================
 * Sigma Web Development Course - Video 107
 * Topic: React State Management (useState)
 * File: App.jsx
 * 
 * Description:
 *   Managing dynamic component state and triggering UI re-renders using the useState hook.
 * ==========================================================================
 */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={()=>{setCount(count + 1)}}>Update count</button>
    </>
  )
}

export default App
