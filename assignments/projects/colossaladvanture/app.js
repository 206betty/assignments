var ask = require("readline-sync");
console.log("FYI, I am craving some Carbs!!")

var monster1 = "Bagel";
var monster2 = "Donut";
var monster3 = "Cake";
var isAlive = true;
var options = ["Take a BITE", "RUN"];
var chomp = ["Wolf Pack", "Lobster Claw", "Piranha"];
var name = ask.question ("What's your name?");
var runner = [1, 2];

while(isAlive){
var walk = ask.keyIn(`${name}, how many carbs have you had today?, Hit w to walk`, {limit: "w"});
    if(walk){

var num = Math.random() * 100;
    if (num < 33) {
        console.log(`${name}! OMG...You've just been attacked by Bagel. Are you going to knock him down and take a BITE or RUN?`);
    }
    if (num < 66  && num > 33) {
        console.log(`${name}! OMG...You've just been attacked by Donut. Are you going to knock him down and take a BITE or RUN?`);
    }
    else if (num > 66) {
        console.log(`${name}! OMG...You've just been attacked by Cake. Are you going to knock him down and take a BITE or RUN?`);
    }
 }
 
 var fOrF = ask.keyInSelect(options,`${name}, Pick your poison!`);
    if (options[fOrF] === "Take a BITE"){
        var strength = ask.keyInSelect(chomp,`${name}, Select your chomp strenth...Grrrrr.`)
    }if (options[fOrF] === "RUN"){
        var jamOut = ask.keyInSelect(runner,`${name}, Feeling lucky? Select a numer, you have a 50% chnce of survival.`)
    }if(jamOut === 1){
        console.log("Pure luck, enjoy your life");
    }if(jamOut === 2){
    }
}
