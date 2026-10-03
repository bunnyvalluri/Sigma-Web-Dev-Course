/**
 * ==========================================================================
 * Sigma Web Development Course - Video 123
 * Topic: Routing & Dynamic Routes in Next.js
 * File: page.js
 * 
 * Description:
 *   Defining static pages, dynamic route folders ([id]), catch-all routes, and navigation with next/link.
 * ==========================================================================
 */
import Image from "next/image";

export default function Home() {
  return (
     <div className="container my-5 size-80 bg-red-300 relative">
      <Image className="mx-auto object-cover" fill={true} src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" />
     </div>
  );
}
