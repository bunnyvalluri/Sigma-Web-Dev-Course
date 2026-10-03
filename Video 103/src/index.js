/**
 * ==========================================================================
 * Sigma Web Development Course - Video 103
 * Topic: Web Deployment & Hosting Guide
 * File: index.js
 * 
 * Description:
 *   Deploying web applications to cloud hosting platforms (Vercel, Render, VPS) with custom domains.
 * ==========================================================================
 */
// Import Express framework
const express = require('express')
require('dotenv').config()
// Create Express application instance
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})