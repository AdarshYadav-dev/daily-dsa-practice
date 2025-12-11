// Q:- Create a game where you start with any random game Number. Ask the user to keep quessing the game number until the users enters correct value 


let randomNum = 50;
let userNum = prompt("Guess the game number");

while (userNum != randomNum) {
    userNum = prompt("You Entered wrong number. Guess again");
}

console.log("Congurtalation , You entered the right number");