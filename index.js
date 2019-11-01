var inquirer = require("inquirer");
var Word = require("./word.js");

var wordList = ["bassnectar", "black sun empire", "habstrakt", "oliver heldens", "kaskade", "noisia"];
var guessesLeft = 10;
var inputLetters = "abcdefghijklmnopqrstuvwxyz";
var guessesIncorrect = [];
var guessesCorrect = [];

inquirer
    .prompt([
        {
            type: "confirm",
            name: "doyouwannaplay", 
            message: "Hi there. Do you want to play a game?"
        }
    ])
    .then(function (reply) {
        if (reply.doyouwannaplay === true) {
            console.log("Cool! I'm thinking of a DJ, can you guess who it is???")
            gamePlay();
        } else {
            console.log("Okay fine I didnt want to play with you anyways! :( ")
        }
    });

function gamePlay () {
    var generateWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    var wordSelected = new Word (generateWord); 
    var wordCheckArr = [];
    var wordComplete = [];

    inquirer
        .prompt([
            {
                type: "input",
                name: "letterinput", 
                message: "Type in any one letter to guess the word."
            }
        ])
        .then(function (input) {
            wordSelected.userGuess(input.letterinput);
            wordSelected.wordArr.forEach(wordCheck)
            var wordCheck = function () {
                wordCheckArr.push(key.guessed)
            }
        });
}