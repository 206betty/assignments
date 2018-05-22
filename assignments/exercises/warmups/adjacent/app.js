// const inputArray = ["this", "is", "an", "array"]
//     for (var i = 0; i < str.length; i++){

//     }

// function longAdjacent(arr) {
//     var long = [arr[0], arr[1], arr[2]];
//     for(var i = 0; i < arr.length; i++) {
//         var group = [arr[i], arr[i + 1], arr[i + 2]];
//         if(group.length > long.length) {
//             return group;
//         } else {
//             return long;
//         }
//     }
// }

// const inputArray = ["this", "is", "an", "array"]

// const combine = (arr) => {
//     let newArray =[];
//     for(let i = 0; i < arr.length; i++){
//         if 
//     }
// }

const inputArray = ["this", "is", "an", "array", "for", 'us'];

const combined = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length - 2; i++){
    let combinedLen = arr[i].length + arr[i+1].length + arr[i+2].length;
    if(combinedLen > total){
      total = combinedLen;
      var newArray = [arr[i], arr[i+1], arr[i+2]]
    }
  }
  return newArray
}

combined(inputArray)