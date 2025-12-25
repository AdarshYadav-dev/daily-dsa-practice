//  Find the second largest element in an array  


let arr = [1234,5432,234,5432,234];

let largest = arr[0];
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        secondLargest = largest;
        largest = arr[i];
    } else if(arr[i] > secondLargest && arr[i] != largest){
        secondLargest = arr[i];
    }
}

console.log("second badi value is : ", secondLargest);