//  Find the second largest element in an array  


let arr = [1234, 5432, 234, 543, 23425, 76543];

let larest_value = arr[0];
let secound_largest_value = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > larest_value) {
        secound_largest_value = larest_value;
        larest_value = arr[i];
    } else if (arr[i] < larest_value && arr[i] > secound_largest_value) {
        secound_largest_value = arr[i]
    }
}

console.log("secound badi value is : ", secound_largest_value)