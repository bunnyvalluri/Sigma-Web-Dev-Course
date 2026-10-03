/**
 * ==========================================================================
 * Sigma Web Development Course - Video 090
 * Topic: Express.js Middlewares
 * File: blog.js
 * 
 * Description:
 *   Understanding middleware execution flow, req/res modification, next(), and custom logging middlewares.
 * ==========================================================================
 */
// Import Express framework
const express = require('express')
const router = express.Router()

// Middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})


// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router