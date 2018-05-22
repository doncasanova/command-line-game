var wordToFind = require("./word.js");
var inquirer = require("inquirer");


// var wordToFind = new WordToFind();

console.log(wordToFind)

function Word(wordToFind) {
    this.wordToFind = wordToFind;
  }
  
  var wordToFind = new Word(wordToFind);
  console.log('theWord.constructor is ' + JSON.stringify(wordToFind));
  


// // var wordToFind = ['']
// // Create a new TV object
// upDateWord(wordToFind)
// function upDateWord(wordToFind) {
//     //create spaces
//     var Spaces = "_";
//     for (var i = 0; i < wordToFind.length; i++) {
//         Spaces[i] = "_";

//         var Spaces = new Spaces();
//         console.log(Spaces)
//     }
// }
// function addTofile() {

//     console.log(wordInput)
// };