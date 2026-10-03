"use client"

/**
 * ==========================================================================
 * Sigma Web Development Course - Video 127
 * Topic: Authentication with NextAuth / Auth.js
 * File: SessionWrapper.js
 * 
 * Description:
 *   Implementing secure OAuth (GitHub, Google) and session management in Next.js applications.
 * ==========================================================================
 */
import { SessionProvider } from "next-auth/react"


const SessionWrapper = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default SessionWrapper
