function twoSum(arr, target) {
    for(var i = 0; i < arr.length; i++) {
        var num = arr[i];
        for(var j = 0; j < arr.length; j++) {
            var char = arr[j]
            if(num + char === target) {
                var index =  arr.indexOf(num);
                var index2 = arr.indexOf(char);
              return [index, index2]
            }
        }
    }
}

console.log(twoSum([1,2,3], 4))
console.log(twoSum([7,4,18,4,3,1,21], 8))

