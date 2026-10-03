/**
 * ==========================================================================
 * Sigma Web Development Course - Video 085
 * Topic: Introduction to Node.js & HTTP Server
 * File: myserver.js
 * 
 * Description:
 *   Creating a backend HTTP web server from scratch using the built-in Node.js 'http' module.
 * ==========================================================================
 */
// Further Reading: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});