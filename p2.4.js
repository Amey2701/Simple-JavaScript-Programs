// Importing the prompt-sync module to get user input
const prompt = require("prompt-sync")();

// Defining a class for Rectangle
class Rectangle {
    // Constructor function to initialize the length and width properties
    constructor(length, width) {
        this.length = length; // Assigning the length passed as argument to the length property of the rectangle
        this.width = width;   // Assigning the width passed as argument to the width property of the rectangle
    }

    // Method to calculate the area of the rectangle
    calculateArea() {
        return this.length * this.width;  // Returning the product of length and width to calculate area
    }

    // Method to calculate the perimeter of the rectangle
    calculatePerimeter() {
        return 2 * (this.length + this.width);  // Returning the perimeter formula: 2 * (length + width)
    }
}

// Getting the length of the rectangle from the user
const length = parseFloat(prompt("Enter the length of the rectangle: "));

// Getting the width of the rectangle from the user
const width = parseFloat(prompt("Enter the width of the rectangle: "));

// Creating an instance of the Rectangle class with user-provided dimensions
const rectangle = new Rectangle(length, width);

// Calculating the area of the rectangle using the calculateArea() method of the Rectangle class
const area = rectangle.calculateArea();

// Calculating the perimeter of the rectangle using the calculatePerimeter() method of the Rectangle class
const perimeter = rectangle.calculatePerimeter();

// Displaying the calculated area of the rectangle
console.log("Area of the rectangle:", area);

// Displaying the calculated perimeter of the rectangle
console.log("Perimeter of the rectangle:", perimeter);
