var Letter = require('./letter.js');

function Word (answer) {
    this.wordArr = [];

    for (var i=0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.wordArr.push(letter); 
    };

    this.printAnswer = function () {
        var answerString = "";
        for (var i=0; i < this.wordArr.length; i++) {
            answerString += this.wordArr[i] + " ";
        }
        console.log(`${answerString} `);
    };

    this.userGuess = function (input) {
        for (var i=0; i < this.wordArr.length; i++) {
            this.wordArr[i].guess(input); 
        } 
    }

};

module.exports = Word; 