// Name: David Comeau
// Class: PROG2700 - Client Side Programming
// Instructor: Nadia Gouda
// Date: February 15, 2025
// Sources Used:
// https://www.geeksforgeeks.org/javascript-operators/
// https://www.geeksforgeeks.org/javascript-course-interaction-with-user/
// https://www.geeksforgeeks.org/javascript-type-conversion/
// https://www.geeksforgeeks.org/variables-datatypes-javascript/
// https://www.geeksforgeeks.org/javascript-window-prompt-method/
// https://www.geeksforgeeks.org/javascript-if-else/


// Part I

// Variable Declaration.
let studentName = "David Comeau";
let studentAge = 39;
let isEnrolled = true;

// Next, we display our values using document.write().
document.write("Name: " + studentName + "<br>");
document.write("Age: " + studentAge + "<br>");
document.write("Enrolled: " + isEnrolled + "<br>");

// Now, we display the data of studentAge before we convert it.
document.write("The data type of studentAge before we convert it: " + typeof studentAge + "<br>");

// Here, we convert studentAge to a string.
studentAge = String(studentAge);

// And now this is the data type of studentAge after we convert it.
document.write("The date type of studentAge after we convert it: " + typeof studentAge + "<br>");

// Part II

// User prompt for the first number.
let num1 = prompt("Enter a Number:");

// User prompt for the second number.
let num2 = prompt("Enter another number:");

// Let's convert the strings to numbers.
num1 = Number(num1);
num2 = Number(num2);

// Quick maths!
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;

// Time to display our results using document.write().
document.write("Addition: " + addition + "<br>");
document.write("Subtraction: " + subtraction + "<br>");
document.write("Multiplication: " + multiplication + "<br>");
document.write("Division: " + division + "<br>");
document.write("Modulus: " + modulus + "<br>");

// Part III

let age; 

// Keep asking until the user enters a valid number
while (true) {
    age = prompt("Using a number, tell me how many spins around the sun you've done:");

    // Check if the input is a number
    if (isNaN(age) || age.trim() === "") {
        alert("I don't know what that was, but it wasn't a number. Try again.");
    } else {
        age = Number(age);  
        break;  
    }
}

// Now, check the age range
if (age >= 18) {
    alert("You are eligible to vote!");
} else {
    alert("You are not eligible to vote yet.");
}

// Part IV

// Let's make a for loop to print the numbers 1 to 10

for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

let number;

// Now, we're going to annoy our user until they enter a number that's greater than 10.
while (true) {
    number = prompt("You must enter a number greater than 10. That means not 5, not 9, and certainly not 'potato'")
    number = Number(number);

    if (number > 10) {
        alert("Oh! Oh, brilliant! You did it! You put in a number bigger than 10! Wow, honestly, I had my doubts. But you? You pulled through. Absolutely nailed it. Look at you, being all clever and putting in " + number);
        break;
    } else {
        alert("Uh… right. Okay. So. Thats… thats a number. Ill give you that. Its just… tiny problem… not greater than 10. Bit of an issue, that. But hey! No worries! We can just, you know, try again!");
    }
}