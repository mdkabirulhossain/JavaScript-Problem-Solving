const prompt = require('prompt-sync')();
let num = Math.ceil(Math.random() * 10);
 console.log("Random Number is: ", num);

let input = prompt("Guess the number between 1 and 10 inclusive:  ");

// // Convert gnum to a number
 input = Number(input);

if (num === input) {
    console.log(num);
    console.log("Matched");
} else {
    console.log(num);
    console.log("Oops! You are wrong.");
}
