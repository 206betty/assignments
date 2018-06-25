var readline = require("readline-sync");
var input = readline.question("what phrase would you like to encrypt?");
var shift = parseInt(readline.question("how many letters would you like to shift?"));

function caesarCipher(input, shift){
    var letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    var newStr ="";
    for (var i = 0; i < input.length; i++) {
        if (letters.indexOf(input[i]) === -1) {
            newStr += input[i];
        }else {
            var position = letters.indexOf(input[i]);
            newStr += letters [(position + shift) % 15];
        }
       }
       return newStr;
}







