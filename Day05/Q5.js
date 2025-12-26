// Check whether an array is sorted or not


// let arr = [1, 2, 3, 4, 5, 6];

// let isSorted = true;

// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//         isSorted = false;
//         break;
//     }
// }

// if (isSorted) {
//     console.log("Array is sorted");
// } else {
//     console.log("Array is not sorted");
// } 


let arr = [1234, 5432, 2345, 765432, 23456];

let issorted = true;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]){
        issorted = false;
        break;
    }
}

if(issorted){
    console.log("array is sorted")
}else{
    console.log("array is not sorted");
}
