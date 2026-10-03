"use client"

/**
 * ==========================================================================
 * Sigma Web Development Course - Video 131
 * Topic: Project: GetMeAChai - Crowdfunding Platform
 * File: SessionWrapper.js
 * 
 * Description:
 *   Full-stack creator funding platform with Razorpay payment integration, NextAuth, and MongoDB.
 * ==========================================================================
 */
import { SessionProvider } from "next-auth/react"

export default function SessionWrapper({children}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}