/**
 * ==========================================================================
 * Sigma Web Development Course - Video 085
 * Topic: Introduction to Node.js & HTTP Server
 * File: server.js
 * 
 * Description:
 *   Creating a backend HTTP web server from scratch using the built-in Node.js 'http' module.
 * ==========================================================================
 */
var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b = slugify('some st&&*(^%$$^^&ring', '_')  // some_string
console.log(b)