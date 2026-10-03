/**
 * ==========================================================================
 * Sigma Web Development Course - Video 120
 * Topic: Global State with Redux Toolkit
 * File: main.jsx
 * 
 * Description:
 *   Setting up a Redux store, defining slices and reducers, and using useSelector & useDispatch hooks.
 * ==========================================================================
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from "./redux/store.js"
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
