//  Find the largest and smallest element in an array  




let arr = [1234,5432,234,5432,234];

let largest = arr[0];
let smallest = arr[0];

for (let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }

    if(arr[i] < smallest){
        smallest = arr[i];
    }
}

console.log("badi value is : ", largest);
console.log("choti value is : ", smallest);