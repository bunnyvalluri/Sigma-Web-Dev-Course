/**
 * ==========================================================================
 * Sigma Web Development Course - Video 068
 * Topic: DOM Element Selection Methods
 * File: script.js
 * 
 * Description:
 *   Selecting elements via document.getElementById(), getElementsByClassName(), querySelector(), and querySelectorAll().
 * ==========================================================================
 */
console.log("Harry")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 