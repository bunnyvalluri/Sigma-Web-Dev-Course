/**
 * ==========================================================================
 * Sigma Web Development Course - Video 137
 * Topic: Project: LinkTree Clone - Link-in-Bio App
 * File: mongodb.js
 * 
 * Description:
 *   Full-stack link-in-bio platform allowing users to claim handles, add social links, and display profile pages.
 * ==========================================================================
 */
// lib/mongodb.js

import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = { 
  useNewUrlParser: true,
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') { 
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
