/**
 * ==========================================================================
 * Sigma Web Development Course - Video 122
 * Topic: Server vs Client Components in Next.js
 * File: page.js
 * 
 * Description:
 *   Understanding the boundary between React Server Components ('use client' directive) and Client Components.
 * ==========================================================================
 */
// import { useState, useEffect } from "react";
import fs from "fs/promises"
import Navbar from "@/components/Navbar"

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("Hey I am harry")
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
   <div>
    <Navbar/>
    I am a component 
    {/* {count} */}
    {/* <button onClick={()=> setCount(count + 1)}>Click me</button> */}
   </div>
  );
}
