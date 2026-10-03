/**
 * ==========================================================================
 * Sigma Web Development Course - Video 120
 * Topic: Global State with Redux Toolkit
 * File: store.js
 * 
 * Description:
 *   Setting up a Redux store, defining slices and reducers, and using useSelector & useDispatch hooks.
 * ==========================================================================
 */
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

// https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux