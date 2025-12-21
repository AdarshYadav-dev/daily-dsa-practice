// 1. Remove duplicate elements from an array  


let arr = [1, 2, 3, 4, 5, 5, 6];

let result = [];

for (let i = 0; i < arr.length; i++) {
    let isDublicate = false;

    for (let j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
             isDublicate = true;
            break;
        }
    }

    if (!isDublicate) {
        result.push(arr[i])
    }
}

console.log(result)