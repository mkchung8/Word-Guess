function Letter (letter) {
    this.letter = letter; 
    this.guessed = false; 
    this.stringConvert = function () {
        if (this.letter === " ") {
            this.guessed === true; 
            return " "; 
        } else {
            if (this.guessed === false) {
                return "_";
            } else {
                return this.letter; 
            }
        }
    }
    this.guess = function (guess) {
        if (guess === this.letter) {
            this.guessed === true; 
        }
    }
};

module.exports = Letter; 


