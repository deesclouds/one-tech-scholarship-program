/*
## Fizzbuzz

"Fizzbuzz" is a famous interview question used in programming interviews. It goes like this:

- loop through the numbers 1 to 100
- if the number is divisible by 3, print "Fizz"
- if the number is divisible by 5, print "Buzz"
- if the number is divisible by 3 & 5, print "Fizzbuzz"
- if the number is not divisible by 3 or 5, print the number

Tip: A number x is divisible by a number y if the answer to x/y has a remainder of 0. 

Ex: 10 is divisible by 2 because 10/2 = 5 with no remainder. We can check if a number is divisible by another number by checking if x % y === 0.

*/

// This is a similar version to FizzBuzz called JuliaJames. 

/*
Directions: write a while loop:
- loop through numbers 1 - 20
- number divisible by 3 print "julia"
- number divisible by 5 print "james"
- number divisible by 3 & 5 print "juliajames"
- if number is not divisible by 3 or 5 print the number

Running code:
node julia-james.js
*/

let x = 1;

while (x <= 20){
    if((x % 3 === 0) &&(x % 5 === 0)){
        console.log("JuliaJames");
}else if(x % 3 === 0){
    console.log("Julia");
}else if(x % 5 === 0){
    console.log("James");
}else{
    console.log(x)
}
x++;
}
/*
Testing Code:
1
2
Julia
4
James
Julia
7
8
Julia
James
11
Julia
13
14
JuliaJames
16
17
Julia
19
James

*/

