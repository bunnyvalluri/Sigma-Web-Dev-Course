/**
 * ==========================================================================
 * Sigma Web Development Course - Video 109
 * Topic: React DOM Access (useRef)
 * File: main.jsx
 * 
 * Description:
 *   Accessing DOM elements directly and persisting mutable values across renders without re-rendering using useRef.
 * ==========================================================================
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
