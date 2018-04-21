var str = "your";
var str2 = "mama";
var fullStr = str.concat(" ", str2);
    console.log(fullStr);

var str = "Your Mama"
var oIndex = str.indexOf("o");
    console.log(oIndex);

var str = "your mama";
var upperStr = str.toUpperCase();
    console.log(upperStr);

var str = "your mama";
var newStr = str.slice(2)
    console.log(newStr);

var str = "your mama my mama everyon's mama";
var newStr = str.slice(3,6);
    console.log(newStr);

var str = "your mama my mama everyon's mama";
var newStr = str.slice(-3);
    console.log(newStr);

var str = "hello I am Betty, the universe is my jam";
var words = str.split(" ");
    console.log(words);

var str = "hello I am Betty, the universe is my jam";
var lines = str.split(",");
    console.log(lines);

var str = "hello I am Betty, the universe is my jam";
var allChar = str.split(" ");
    console.log(allChar);

var str = "hello I am Betty, the universe is my jam";
var match = str.match(str);
    console.log(match);
