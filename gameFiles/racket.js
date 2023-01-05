export default class Racket {
    constructor(racketElement){
        this.racketElement = racketElement
    }


    get position() {
        return parseFloat(getComputedStyle(this.racketElement).getPropertyValue("--postition"))
    }

    set position(value) {
        this.racketElement.style.setProperty("--position", value)
    }
}