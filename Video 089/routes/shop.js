/**
 * ==========================================================================
 * Sigma Web Development Course - Video 089
 * Topic: Express Request, Response & Routers
 * File: shop.js
 * 
 * Description:
 *   Handling route parameters (:param), query strings, response methods (send, json, download), and express.Router.
 * ==========================================================================
 */
// Import Express framework
const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Shop home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About shop')
})
 

module.exports = router