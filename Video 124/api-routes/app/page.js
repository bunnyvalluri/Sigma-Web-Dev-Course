"use client"

/**
 * ==========================================================================
 * Sigma Web Development Course - Video 124
 * Topic: API Route Handlers in Next.js
 * File: page.js
 * 
 * Description:
 *   Creating backend REST API endpoints using route.js files with GET, POST, PUT, DELETE handlers.
 * ==========================================================================
 */
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Shubham",
      role: "Coder"
    }
    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res)
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Next.js Api routes demo</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
