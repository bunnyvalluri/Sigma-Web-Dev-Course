/**
 * ==========================================================================
 * Sigma Web Development Course - Video 087
 * Topic: Node.js File System Module
 * File: main.js
 * 
 * Description:
 *   Working with files using the 'fs' module (readFile, writeFile, appendFile) and fs/promises.
 * ==========================================================================
 */
const fs = require("fs")
// const fs = require("fs/promises")
 
console.log("starting")
// fs.writeFileSync("harry.txt", "Harry is a good boy")

fs.writeFile("harry2.txt", "Harry is a good boy2", ()=>{
    console.log("done")
    fs.readFile("harry2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("harry.txt", "harryrobo", (e, d)=>{
    console.log(d)
})

console.log("ending")