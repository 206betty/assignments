//ask user for name and give greeting
var ask = require("readline-sync");
console.log("FYI, I am craving some Carbs!!")
var name = ask.question ("What's your name?");

var monster1 = "Bagel";
var monster2 = "Donut";
var monster3 = "Cake";

var isAlive = true;
while(isAlive){

function walk(){  
    //ask user to push "w" to walk
    var walk = ask.keyIn(`${name}, how many carbs have you had today?, Hit w to walk`, {limit: "w"});
    var num = Math.random() * 100;
    if(walk){
        if (num < 33) {
            console.log(`${name}! OMG...You've just been attacked by Bagel. Are you going to knock him down and take a BITE or RUN?`);
        }
        else if (num < 66  && num > 33) {
            console.log(`${name}! OMG...You've just been attacked by Donut. Are you going to knock him down and take a BITE or RUN?`);
        }
        else if (num > 66) {
            console.log(`${name}! OMG...You've just been attacked by Cake. Are you going to knock him down and take a BITE or RUN?`);
         } else {
             console.log("Look at that, You escaped a Carb attack");
             //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
         }
        }
    }
}

//      } else {
//          //tell user what's in their inventory, and their health, and then tell them to push w to walk
//  }
 
//  function run(){  
//      if(1 in 2){
//          //tell user that they successfully got away and can continue walking
//          //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
//      } else {
//          //tell user they were not able to run
//          //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
//  }
 
//  function fight(){  
//      ask user to either fight or run
//      enemyCreation()
//      if (user is trying to run){
//          run()
//      } else {
//          attackEnemy
//      }
//  }
 
//  //****you get the idea****
 
//  function attackEnemy(){
 
//  }
 
//  function enemyAttack(){
 
//  }
 
//  function die(){
 
//  }
 
//  function enemyDie(){
 
//  }