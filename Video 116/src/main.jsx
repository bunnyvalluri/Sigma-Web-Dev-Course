/**
 * ==========================================================================
 * Sigma Web Development Course - Video 116
 * Topic: Global State with React Context API
 * File: main.jsx
 * 
 * Description:
 *   Eliminating prop drilling by creating Contexts, Providers, and consuming shared state with useContext.
 * ==========================================================================
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
