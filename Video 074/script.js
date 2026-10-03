/**
 * ==========================================================================
 * Sigma Web Development Course - Video 074
 * Topic: JavaScript Events & Event Bubbling
 * File: script.js
 * 
 * Description:
 *   Covers addEventListener, click events, event object, event bubbling, and stopPropagation().
 * ==========================================================================
 */
let button = document.getElementById("btn")
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})