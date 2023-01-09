export default class Ball {
    constructor(ballElement) {
        this.ballElement = ballElement
    }

    get positionX() {
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--x"))
    }

    set positionX(value) {
        this.ballElement.style.setProperty("--x", value)
    }

    get positionY() {
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--y"))
    }

    set positionY(value) {
        this.ballElement.style.setProperty("--y", value)
    }
}