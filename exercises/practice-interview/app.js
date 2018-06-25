// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Rules
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.

// Examples
// "ooxx" ➞ true
// "xooxx" ➞ false
// "ooxXm" ➞ true (case insensitive)
// "zpzpzpp" ➞ true (returns true if no x and o)
// "zzoo" ➞ false

// call function and loop thru each char looking for x or o
// function findSameNum(str){
//     var 
// }

// if x or o are present see if equal amt. and return true if not return false


const isEqual = str => {
    let countX = 0;
    let countO = 0;
    for(let i = 0; i < str.length; i++) {
      let char = str[i];
      if(char === 'o' || char === 'O') {
        countO++
      } else if(char === 'x' ||  char === 'X') {
        countX++
      }
    }
    if(countX !== countO) {
      return false;
    } else  {
      return true;
    }
   }






