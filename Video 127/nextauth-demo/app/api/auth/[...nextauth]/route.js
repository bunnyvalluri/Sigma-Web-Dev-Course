/**
 * ==========================================================================
 * Sigma Web Development Course - Video 127
 * Topic: Authentication with NextAuth / Auth.js
 * File: route.js
 * 
 * Description:
 *   Implementing secure OAuth (GitHub, Google) and session management in Next.js applications.
 * ==========================================================================
 */
import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
  ]
})

export {handler as GET, handler as POST}