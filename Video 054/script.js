/**
 * ==========================================================================
 * Sigma Web Development Course - Video 054
 * Topic: Introduction to JavaScript & Node.js
 * File: script.js
 * 
 * Description:
 *   First steps with JavaScript, running scripts in the browser console and via Node.js runtime.
 * ==========================================================================
 */
alert("Hello World");

console.log("Code is running...")
console.log("Code is also running...")
console.log("Code is looking like a wow...")

var a = prompt("Enter your number")
var isTrue = confirm("Are you sure you want to leave this page and blast your computer ")

if(isTrue){
    console.log("Computer is blasting")
}

else{
    console.log("Computer is not blasting")

}
console.log("Your number is " + a)

document.title = "Hey I am good"

// document.body.style.backgroundColor = "red"