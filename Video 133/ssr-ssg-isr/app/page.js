/**
 * ==========================================================================
 * Sigma Web Development Course - Video 133
 * Topic: Next.js Rendering Strategies: SSR, SSG & ISR
 * File: page.js
 * 
 * Description:
 *   Comparing Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR).
 * ==========================================================================
 */
import Image from "next/image";

export default async function Home() { 
  
  let data = await fetch('https://api.vercel.app/blog',  { next: { revalidate: 3600 } })
  let posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

// export const dynamic = 'force-dynamic'