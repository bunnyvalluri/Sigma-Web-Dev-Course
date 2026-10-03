"use client"

/**
 * ==========================================================================
 * Sigma Web Development Course - Video 127
 * Topic: Authentication with NextAuth / Auth.js
 * File: page.js
 * 
 * Description:
 *   Implementing secure OAuth (GitHub, Google) and session management in Next.js applications.
 * ==========================================================================
 */
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session)
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn("github")}>Sign in using Github</button>
    <button onClick={() => signIn("google")}>Sign in using Google</button> 
  </>
}