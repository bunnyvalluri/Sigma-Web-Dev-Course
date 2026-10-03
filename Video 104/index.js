/**
 * ==========================================================================
 * Sigma Web Development Course - Video 104
 * Topic: Production Deployment Best Practices
 * File: index.js
 * 
 * Description:
 *   Configuring environment variables, production builds, and process management.
 * ==========================================================================
 */
// Import Express framework
const express = require('express')
// Create Express application instance
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})