// 125. Valid Palindrome || string ka hai form leetcode,

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true

// code explanation
// approch one : tolowercase mai convert kiya jisse case-insensitive compparsion ho ske
// approch two : maine ek loop use jo everycharacter k check karega (a to z) to (0 to 9) ek variable mai store kiya
// approch three:  ek or loop use kiya jisse ek string ko reverse kar deta hai 
// approch four : maine return karya do no loop ko using Compression operator

// code

function checkPalindrome(s){
    let actualWord = '';

    S = s.toLowerCase();

    for(let ch of S){
        if((ch >='a'&& ch <='z') || (ch >='0'  && ch <='9')){
            actualWord += ch;
        }
    }

    let reverse = '';

    for(let i = actualWord.length-1; i>=0; i--){
        reverse += actualWord[i];
    }

    return actualWord=== reverse;
}

console.log(checkPalindrome("A man, a plan, a canal: Panama"))

