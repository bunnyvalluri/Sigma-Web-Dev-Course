/**
 * ==========================================================================
 * Sigma Web Development Course - Video 086
 * Topic: Node.js Module Systems
 * File: main.js
 * 
 * Description:
 *   Comparing CommonJS (require / module.exports) with modern ECMAScript Modules (import / export).
 * ==========================================================================
 */
// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)


// import harry from "./mymodule.js"
// console.log(harry)

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

const a = require("./mymodule2.js")

console.log(a, __dirname, __filename)