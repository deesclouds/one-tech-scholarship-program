/*
Directions: Write an if else statement that:
prints "even" if the number is an even number
prints "odd" if the number is an odd number

Hint: use '%' the modulo operator to determine if a number is even or odd. The modulo operator takes two numbers and returns the remainder when the first number is divided by the second one:

console.log(12 % 3);
console.log(10 % 4);

prints:
0 
2

12 % 3 = 0 because there is no remainder
10 % 4 because there is a remainder of two

Make sure to test your code with different values

if number = 1 = odd
if number = 2 = even

Enter node even-or-odd.js in the terminal to run code
*/

const number = 6;

if (number % 5 === 0){
    console.log("Even");
}else {
    console.log("Odd");
}

