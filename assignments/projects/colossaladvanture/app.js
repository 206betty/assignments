var ask = require("readline-sync");
console.log("FYI, I am craving some Carbs!!")
var name = ask.question ("What's your name?");
var monster1 = "Bagel";
var monster2 = "Donut";
var monster3 = "Cake";
var isAlive = true;

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
 
 var monster1 = {
    name: "Bagel",
    hp: 65
}
var monster2 = {
    name: "Donut",
    hp: 65
}
var monster3 = {
    name: "Cake",
    hp: 65
}
var player = {
    name: "name",
    hp: 65
}
// you prob dont need this var attack = ask.keyIn(`Hit a to bite back`, {limit: "a"});
// if(attack)


player["hp"] = player["hp"] - Math.random() * 65;
monster1["hp"] = monster1["hp"] - Math.random() * 65;
monster2["hp"] = monster2["hp"] - Math.random() * 65;
monster3["hp"] = monster3["hp"] - Math.random() * 65;
 var options = ["Take a BITE", "RUN"];
 var chomp = ["Wolf Pack", "Lobster Claw", "Piranha"];
 var runner = [1, 2];
 var fOrF = ask.keyInSelect(options,`${name}, Pick your poison!`);

    if (options[fOrF] === "Take a BITE"){
        var strength = ask.keyInSelect(chomp,`${name}, Select your chomp strenth...Grrrrr.`)
        // decide what enemy you are going to attack 1/3 chance per enemy
        // attack the enemy Math.random() - monster hp
        // do this while enemy is alive while(monster1["hp"] > 1)
        // 

            if (monster1["hp"] > 0) {
            console.log("looks like Bagel is ready to fight on");
            }
            if (monster2["hp"] > 0) {
            console.log("looks like Donut is ready to fight on");
            }
            if (monster3["hp"] > 0) {
            console.log("looks like Cake is ready to fight on");
            }
            if (options[fOrF] === "RUN"){
        var jamOut = ask.keyInSelect(runner,`${name}, Feeling lucky? Select a numer, you have a 50% chnce of survival.`)
            }
            if(jamOut === 1){
            console.log("Pure luck, enjoy your life!");
            }
            if(jamOut === 2){ 
            }
            if (monster1["hp"] > 0) {
                console.log("looks like Bagel has some fight left in him");
            }
            if (monster2["hp"] > 0) {
                console.log("looks like Donut has some fight left in him");
            }
            if (monster3["hp"] > 0) {
                console.log("looks like Cake has some fight left in him");
            }
        }
    
}

