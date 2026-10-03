"use client"

/**
 * ==========================================================================
 * Sigma Web Development Course - Video 132
 * Topic: Navigation Hooks in Next.js
 * File: page.js
 * 
 * Description:
 *   Utilizing useRouter, usePathname, and useSearchParams for dynamic client-side navigation.
 * ==========================================================================
 */
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchparms = useSearchParams()
  return (
    <div>
      Hey this is our page and blog is {searchparms.get('blog')} and utm source is {searchparms.get('utm_source')}
    </div>
  );
}
