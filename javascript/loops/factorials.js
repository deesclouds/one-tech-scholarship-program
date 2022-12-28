/*
Directions: Write a for loop that prints out the factorial of the number 12:

**What is a factorial?**
It is calculated by multiplying a number by all the numbers below it. 

Ex:
3! or "3 factorial" is 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 6 
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120

Save final answer in a variable called solution and print it to the console.

Running code: 
node factorials.js
*/

solution = 1;
for(let i = 1; i <= 12; i++){
    solution *= i;
}
console.log(solution);
/*
Testing code:

Use for loop and code runs without errors:

479001600
*/
