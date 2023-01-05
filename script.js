import Ball from "./gameFiles/ball.js";

const ball = new Ball(document.getElementById("ball"))

let lastTime
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        /* console.log(delta) */
        /* console.log(time) */
    }
    
    lastTime = time
    window.requestAnimationFrame(update)
} 

window.requestAnimationFrame(update)