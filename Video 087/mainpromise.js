/**
 * ==========================================================================
 * Sigma Web Development Course - Video 087
 * Topic: Node.js File System Module
 * File: mainpromise.js
 * 
 * Description:
 *   Working with files using the 'fs' module (readFile, writeFile, appendFile) and fs/promises.
 * ==========================================================================
 */
import fs from "fs/promises"

let a = await fs.readFile("harry.txt")

let b = await fs.appendFile("harry.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)