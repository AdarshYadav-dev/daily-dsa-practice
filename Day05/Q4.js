// Reverse an array without using the built-in `reverse()` method 

let arr = [23456,76543,234567876,5434567,8765432345];

let result = [];

for(let i = arr.length-1; i>= 0; i--){
    result[result.length] = arr[i]
}

console.log(result)