/**
 * ==========================================================================
 * Sigma Web Development Course - Video 116
 * Topic: Global State with React Context API
 * File: context.js
 * 
 * Description:
 *   Eliminating prop drilling by creating Contexts, Providers, and consuming shared state with useContext.
 * ==========================================================================
 */
import { createContext } from "react";

export const counterContext = createContext(0)