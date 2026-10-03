/**
 * ==========================================================================
 * Sigma Web Development Course - Video 079
 * Topic: JavaScript Error Handling
 * File: script.js
 * 
 * Description:
 *   Demonstrates robust error handling using try...catch...finally blocks and throwing custom Error objects.
 * ==========================================================================
 */
let a = prompt("Enter first number")

let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main(){ 
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    } 
    finally{
        console.log("files are being closed and db connection is being closed")
    }
  
}

let c = main()
