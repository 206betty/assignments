var phrase = 'slimy smelly solution';

// function getFrequency(str) {
//     var freq = {};
//     for (var i =0; i < string.length; i++) {
//         var char = string.charAt(i);
//         if (freq[char]) {
//             freq [char]++;
//         }else {
//             freq[char] = 1;
//         }
//     }
//     return freq;
// }

function letterFrequency(str) {
    var count = [];
    str.split("").forEach(function(s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
    }
console.log(letterFrequency(phrase));