/**
 * ==========================================================================
 * Sigma Web Development Course - Video 124
 * Topic: API Route Handlers in Next.js
 * File: route.js
 * 
 * Description:
 *   Creating backend REST API endpoints using route.js files with GET, POST, PUT, DELETE handlers.
 * ==========================================================================
 */
import { NextResponse } from "next/server";

export async function POST(request) {
    let data = await request.json()
    console.log(data)
    return NextResponse.json({success: true, data})
} 
  