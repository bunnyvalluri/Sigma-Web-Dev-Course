/**
 * ==========================================================================
 * Sigma Web Development Course - Video 137
 * Topic: Project: LinkTree Clone - Link-in-Bio App
 * File: route.js
 * 
 * Description:
 *   Full-stack link-in-bio platform allowing users to claim handles, add social links, and display profile pages.
 * ==========================================================================
 */
import clientPromise from "@/lib/mongodb"


export async function POST(request) {
    const body = await request.json()

    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    // If the handle is already claimed, you cannot create the bittree
    const doc = await collection.findOne({handle: body.handle})

    if (doc){
      return Response.json({ success: false, error: true, message: 'This Bittree already exists!', result: null })
    }

    const result = await collection.insertOne(body)
     
    return Response.json({ success: true, error: false, message: 'Your Bittree has been generated!', result: result,  })
  }