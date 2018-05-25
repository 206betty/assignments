const every = (arr, callabck) => {
    for (let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            return false
        }
    }
    retunr true;
}

const myArr = [1, 2, 3, 4, 5];
console.log(every(myArr, (num) => {
    return typeOf num === "number"
}))



const some = (arr, callabck) => {
    for (let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            return true
        }
    }
    return false;
}

const myArr = [1, 2, 3, 4, 5];
console.log(some(myArr, (num) => {
    return typeOf num === "number"
}))

