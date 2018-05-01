var ask = require("readline-sync");

var hasKey = false;

var isAlive = true;

var options = ["put hand in hole", "find key", "open door"];

while(isAlive){
var index = ask.keyInSelect(options, "What do you want to do?");

if (options[index] === "put hand in hole"){
    console.log("you die")
} else if (options[index] === "open door"){
        if(hasKey){
            console.log("the door is open")
            console.log("you win the game")
            isAlive = false;
        }else {
            console.log("go find the key first")
        }
    }else if (options[index] === "find key"){
        hasKey = true;
        console.log("you found the key")
}
}
