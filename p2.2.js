const prompt = require("prompt-sync")();

// Prompting the user to input three numbers
var num1 = parseFloat(prompt("Enter the first number : "));
var num2 = parseFloat(prompt("Enter the second number : "));
var num3 = parseFloat(prompt("Enter the third number : "));

// Calculating the average
var average = (num1 + num2 + num3) / 3;

// Displaying the result
console.log("The average of " + num1 + ", " + num2 + ", and " + num3 + " is: " + average.toFixed(2));
