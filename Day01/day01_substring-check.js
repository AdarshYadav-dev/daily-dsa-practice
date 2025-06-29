//  Question:-
// Check if all strings in an array contain a given substring (key).
// Return true if all strings contain the substring anywhere (not just at the end).
// Otherwise, return false.



//  Explanation:
// point 1:  we need to check every string in the array.
// point 2: if any one string does NOT include the key, return false immediately.
// point 3: if the entire loop finishes and all strings included the key, return true.


function checkString(arr, key){
    for(let i = 0; i<arr.length; i++){
        if(!arr[i].includes(key)){
            return false;
        }
    }
    
    return true;
};

console.log(checkString(["sla", "tla", "gla", "cla"],"la"));

// example
// input: ["sla", "tla", "gla", "cla"], key = "la"
// output: true;
