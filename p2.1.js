const prompt = require("prompt-sync")();

// Prompting the user to input two numbers
var num1 = parseFloat(prompt("Enter the first number : "));
var num2 = parseFloat(prompt("Enter the second number : "));

// Adding the two numbers
var sum = num1 + num2;

// Displaying the result
console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);
