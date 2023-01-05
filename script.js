import Ball from "./gameFiles/ball.js";
import Racket from "./gameFiles/racket.js";


//const ball = new Ball(document.getElementById("ball"))

const playerRacket = new Racket(document.getElementById("playerPadell"))
const computerRacket = new Racket(document.getElementById("computerPadell"))

document.addEventListener(("mousemove"), e => {
    playerRacket.position = e.y / window.innerHeight * 100
})

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

