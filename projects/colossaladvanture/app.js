var ask = require("readline-sync");
console.log("FYI, I am craving some Carbs!!")
var name = ask.question ("What's your name?");
var isAlive = true;
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
player.name = name;
var options = ["Take a BITE", "RUN"];
var runner = [1, 2];
while(player['hp'] > 1){
var walk = ask.keyIn(`${name}, how many carbs have you had today?, Hit w to walk`, {limit: "w,p"});
    if(walk === "w"){
var num = Math.random() * 100;
    if ((num < 33) && (monster1["hp"] > 1)) {
        while((player["hp"] > 1) && (monster1["hp"] > 1)) {
        console.log(`${name}! OMG...You've just been attacked by Bagel. Are you going to knock him down and take a BITE or RUN?`);
        var fOrF = ask.keyInSelect(options,`Choose 1 to take a BITE or 2 to RUN.`);
        if (options[fOrF] === "RUN"){
        var jamOut = ask.keyInSelect(runner,`${name}, Feeling lucky? Select a numer, you have a 50% chnce of survival.`);
        if(runner[jamOut] === 1){
        console.log("Pure luck, enjoy your life!");
        }
        else if(runner[jamOut] === 2){ 
            console.log('You were unable to run.');
            var damage = Math.floor(Math.random() * 65);
            player["hp"] = player["hp"] - damage;
            console.log(`You lost ${damage} now you have ${player['hp']} hp.`);
            if (player["hp"] < 1) {
            console.log("Ummm, you've died with honor and a sugar high.");
            }
        }
    }
        else if (options[fOrF] === "Take a BITE"){
            if(monster1['hp'] < 1) {
                console.log("the enemy is dead.")
            } else {
           var damage = Math.floor(Math.random() * 65);
            monster1["hp"] = monster1["hp"] - damage;
            console.log(`${monster1['name']} lost ${damage} health. now they  have ${monster1['hp']} health.`);  
            if (monster1["hp"] < 1) {
            console.log("You are a confirmed carb killer");
            player.item = "loud cheering";
            }
        }
    }
    }   
 } 
    else if ((num < 66  && num > 33) && (monster2["hp"] > 1)) {
        while((player["hp"] > 1) && (monster2["hp"] > 1)) {
        console.log(`${name}! OMG...You've just been attacked by Donut. Are you going to knock him down and take a BITE or RUN?`);
        var fOrF = ask.keyInSelect(options,`Choose 1 to take a BITE or 2 to RUN.`);
        if (options[fOrF] === "RUN"){
        var jamOut = ask.keyInSelect(runner,`${name}, Feeling lucky? Select a numer, you have a 50% chnce of survival.`);
        if(runner[jamOut] === 1){
        console.log("Pure luck, enjoy your life!");
        }
        else if(runner[jamOut] === 2){ 
            console.log('You were unable to run.');
            player["hp"] = player["hp"] - damage;
            console.log(`You lost ${damage} now you have ${player['hp']} hp.`);
            if (player["hp"] < 1) {
            console.log("Ummm, you've died with honor and a sugar high.");
        }
    }    
}
        else if (options[fOrF] === "Take a BITE"){
            if(monster2['hp'] < 1) {
                console.log("the enemy is dead")
            } else {
            var damage = Math.floor(Math.random() * 65);
            monster2["hp"] = monster2["hp"] - damage;
            console.log(`${monster2['name']} lost ${damage} health. Now it has ${monster2['hp']} health.`);  
            if (monster2["hp"] < 1) {
            console.log("You are a confirmed carb killer");
            player.item = "loud cheering"
            player["hp"] = player["hp"] - damage;
        }
    }
    }
}
} 
    else if ((num > 66) && (monster3["hp"] > 1)) {
        while((player["hp"] > 1) && (monster3["hp"] > 1)) {
        console.log(`${name}! OMG...You've just been attacked by Cake. Are you going to knock him down and take a BITE or RUN?`);
        var fOrF = ask.keyInSelect(options,`Choose 1 to take a BITE or 2 to RUN.`);
        if (options[fOrF] === "RUN"){
        var jamOut = ask.keyInSelect(runner,`${name}, Feeling lucky? Select a numer, you have a 50% chnce of survival.`);
        if(runner[jamOut] === 1){
        console.log("Pure luck, enjoy your life!");
        }
        else if(runner[jamOut] === 2){ 
            console.log('You were unable to run.');
            var damage = Math.floor(Math.random() * 65);
            player["hp"] = player["hp"] - damage;
            console.log(`You lost ${damage} now you have ${player['hp']} hp.`);
            if (player["hp"] < 1) {
            console.log("Ummm, you've died with honor and a sugar high.");
            }
        }
    }    
        else if (options[fOrF] === "Take a BITE"){
        if(monster3['hp'] < 1) {
            console.log('the enemy is dead')
        } else {
        var damage = Math.floor(Math.random() * 65);
        monster3["hp"] = monster3["hp"] - damage;
        console.log(`${monster3['name']} lost ${damage} health. Now they have ${monster3['hp']} health.`);  
        if (monster3["hp"] < 1) {
        console.log("You are a confirmed carb killer");
    }
}
 } 
}
} 
    }
}
