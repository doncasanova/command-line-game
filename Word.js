console.log('this is word doc')
// var request = require("request");
var fs = require("fs");


var wordInput = ['hello', 'what', 'when', 'why']

var wordToFind = wordInput[Math.floor(Math.random() * wordInput.length)];

module.exports = wordToFind;