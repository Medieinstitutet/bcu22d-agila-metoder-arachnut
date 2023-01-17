import Ball from "./gameFiles/ball.js"
import Racket from "./gameFiles/racket.js"

const ball = new Ball(document.getElementById("ball"))
const playerOneRacket = new Racket(document.getElementById("playerOneRacket"))
const playerTwoRacket = new Racket(document.getElementById("playerTwoRacket"))
const playerOneScoreElem = document.getElementById("playerOneScore")
const playerTwoScoreElem = document.getElementById("playerTwoScore")

function lost() {
  const rect = ball.rect()
  return rect.right >= window.innerWidth || rect.left <= 0
}

function handleLose() {
  const rect = ball.rect()
  if (rect.right >= window.innerWidth) {
    playerOneScoreElem.textContent = parseInt(playerOneScoreElem.textContent) + 15
  } else {
    playerTwoScoreElem.textContent = parseInt(playerTwoScoreElem.textContent) + 15
  }
  ball.reset()
  playerTwoRacket.reset()
}
document.addEventListener("mousemove", e => {
    playerOneRacket.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)

let lastTime
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime
    ball.update(delta, [playerOneRacket.rect(), playerTwoRacket.rect()])
    playerTwoRacket.update(delta, ball.y)

    if (lost()) handleLose()
  }
  lastTime = time
  window.requestAnimationFrame(update)
}