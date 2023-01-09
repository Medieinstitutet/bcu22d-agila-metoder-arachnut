import Ball from "./gameFiles/ball.js";
import Racket from "./gameFiles/racket.js";


//const ball = new Ball(document.getElementById("ball"))

const playerOneRacket = new Racket(document.getElementById("playerOnePadell"))
const playerTwoRacket = new Racket(document.getElementById("playerTwoPadell"))

document.addEventListener(("mousemove"), e => {
    playerOneRacket.position = e.y / window.innerHeight * 100
})

document.addEventListener("keydown", (e) => {
    //console.log ("event", e.key);
    switch (e.key) {
        case "w":
        case "ArrowUp":
            //console.log ("up", e.key);
            playerTwoRacket.position -= 5
            break
        case "s":
        case "ArrowDown":
            //console.log ("down", e.key);
            playerTwoRacket.position += 5
            break
    }
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

