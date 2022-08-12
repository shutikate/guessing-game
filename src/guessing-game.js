class GuessingGame {
    constructor() {}
    
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.middleNumber = Math.round((this.max + this.min) / 2);
        return this.middleNumber;
    }

    lower() {
        this.max = this.middleNumber;
    }

    greater() {
        this.min = this.middleNumber;
    }
}

module.exports = GuessingGame;
