class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.floor(this.min + (this.max +1 - this.min)/2);
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess();
    }
}


module.exports = GuessingGame;
