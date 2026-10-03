/**
 * ==========================================================================
 * Sigma Web Development Course - Video 087
 * Topic: Node.js File System Module
 * File: aboutpath.js
 * 
 * Description:
 *   Working with files using the 'fs' module (readFile, writeFile, appendFile) and fs/promises.
 * ==========================================================================
 */
import path from "path"

let myPath = "C:\\Users\\iitia\\Downloads\\Sigma Web Development Course\\Sigma-Web-Dev-Course\\Video 87\\harry.txt"
console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("c:/", "programs\\harry.txt"))