// function validateIpAddress(ipaddress) {
//     if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
//         return (true)  
//       }  
//       alert("You have entered an invalid IP address!")  
//       return (false)
// }
// console.log(validateIpAddress('172.16.254.1'));


const val = num => {
    var nums = num.split('.');
    if(nums.length !== 4) {
        return false;
    }
   return nums.every(n => Number(n > 0 && n <= 255)) 
}
console.log(val('172.16.254.1'));
