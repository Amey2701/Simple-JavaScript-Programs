const prompt = require("prompt-sync")();

// Function to calculate area of a circle
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

// Function to calculate circumference of a circle
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

// Prompting the user to input the radius of the circle
var radius = parseFloat(prompt("Enter the radius of the circle (in cm):"));

// Calculating area and circumference
var area = calculateArea(radius);
var circumference = calculateCircumference(radius);

// Printing the results
console.log("The area of the circle with radius " + radius + " cm is: " + area.toFixed(2) + " sq.cm");
console.log("The circumference of the circle with radius " + radius + " cm is: " + circumference.toFixed(2) + " cm");
