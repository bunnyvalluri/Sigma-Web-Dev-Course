/**
 * ==========================================================================
 * Sigma Web Development Course - Video 120
 * Topic: Global State with Redux Toolkit
 * File: App.jsx
 * 
 * Description:
 *   Setting up a Redux store, defining slices and reducers, and using useSelector & useDispatch hooks.
 * ==========================================================================
 */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/counter/counterSlice'

function App() { 
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>

    </>
  )
}

export default App
