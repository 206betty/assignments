// [1,2,3,4,5,6].sort(function() {
//     return .5 - Math.random();
//   });
  


// shuffle([1,2,3,4,5]);  
// //returns [3,5,4,1,2]

const shuffle = arr => {
    var newArr = [];
        while(newArr.length < arr.length) {
        var num = Math.floor(Math.random() * arr.length);
        if(newArr.includes(arr[num])) {
            continue;
        } else {
            newArr.push(arr[num])
        }
    }
    return newArr;
}