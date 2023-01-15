const SPEED = 0.02

export default class Racket {
  constructor(racketElem) {
    this.racketElem = racketElem
    this.reset()
  }

  reset() {
    this.position = 50
  }
  get position() {
    return parseFloat(
      getComputedStyle(this.racketElem).getPropertyValue("--position")
    )
  }
  set position(value) {
    this.racketElem.style.setProperty("--position", value)
  }
  rect() {
    return this.racketElem.getBoundingClientRect()
  }
  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position)
  }
}