# Loops

How to harness the power of JavaScript loops to reduce code duplication and automate repetitive tasks.

**What are loops?**

They control the flow of code allowing us to execute a block of code multiple times.

- while loops
- for loops
- nested loops

loops lets us iterate over values and repeatedly run a block of code.

## Parts of a while loop
<!-- image of a for loop -->
There are many different kinds of loops that essentially do the same thing: repeat an action multiple times

Three main pieces loops should have:
- when to start: defining the starting value of a variable 
- when to stop: logical condition to test whether the loop should continue
- how to get to the next item: incrementing or decrementing step

**What is an infinite loop?**
A loop missing a stop condition.

**What do infinite loops do?**
The run forever and can crash your browser.

Read more about while loops [MDN-while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)


**What should loops always include?**
- Where to start
- When to stop
- How to get to the next item

It's easy to forget some of these pieces in a while loop and end up with an infinite loop that crashes your browser.

for loops gives us more control over the looping process. 

# Parts of a for loop
<!-- image of for loop -->
<img src="for-loop.png" alt="image of a for loop">

***What do we need to create a for loop?**
The for loop forces us to define the start point, stop point, and each step in the loop. 

If any of these are left out we'll see an error in the console that reads "Uncaught SyntaxError: Unexpected token"

```
for (start; stop; step){
    // do this
    }
```

an example of a for loop printing numbers from 0-5. 

```
for (let i = 0; i < 6; i = i + 1){
    console.log("Printing out i = " + i);
}
```
How the Loop is Interpreted:
i	    i < 6	    console.log output
0	    true	    Printing out i = 0
1	    true	    Printing out i = 1
2	    true	    Printing out i = 2
3	    true	    Printing out i = 3
4	    true	    Printing out i = 4
5	    true	    Printing out i = 4
6	    false	

[MDN-for-loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

# Nested Loops
<!-- nested loops image -->
<img src="nested-loop" alt="image of nested loop">

***What are nested loops?***
Nested loops are loops inside of loops.

**What does nested loops add?**
Another level of complexity.

```
for (let x = 0; x < 3; x = x + 1) {
    for (let y = 0; y < 2; y = y + 1) {
        console.log(x + ", " + y);
    }
}
```

x	x < 3	y	y < 2	console.log output
0	true	0	true	    0, 0
0	true	1	true	    0, 1
0	true	2	false	
1	true	0	true	    1, 0
1	true	1	true	    1, 1
1	true	2	false	
2	true	0	true	    2, 0
2	true	1	true	    2, 1
2	true	2	false	
3	false		


# Increment, Decrement and Assignment Operators

**What are increment and decrement operators?**
They are shorthands that are often used in the step part of the loop.

## Increment Operator
**What is the increment operator?**
It is '++' and it adds one to a variable, returns a value and assigns the incremented value to the variable.

What is the postfix operator?
'x++'

**What does the postfix operator mean?**
It means that it returns the value before incrementing it.

**What is an example for the postfix?**
```
let x = 2;
x++ //returns 2 then assigns 3 as the value of x
console.log(x); //logs 3

**What is the prefix operator?**
'++x'

**What does the prefix operator do?**
It returns the value after incrementing it

**What is an example for the prefix operator?**
let x = 2;
++x //assigns 1 as the value of x then return 3
console.log(x); //logs out 3

**What does the increment operator do?**
It increases 

**How do we write an increment in shorthand?**
x++; 
++x; 

## Decrement Operator

**What is the decrement operator?**
It is '--' and it subtracts one from a variable, returns a value and assigns the decremented value to the variable. 

**How do we write a decrement in short hand?**
x--;
--x; 

Examples of ways to write a decrement:
y = y - 1;
y--;
--y;

## Assignment Operators

**What is an assignment operator?**
It's a shorthand way to perform a mathematical operation on a variable and assigns that value to the variable. 

We can use it for addition, subtraction, multiplication, and division. 

x += y; or x = x + y;

x -= y or x = x - y;

x *= y or x = x * y;

x /= y or x = x / y;


An example:
let x = 4;
x++;
console.log(x);

returns 5 

Why?
It increments the value by one. 

Another example:
let x = 12;
x+=5;
console.log(x);

returns 17

Why?
It returns the value of x and adds 5 which will return 17 since 12 + 5 = 17

[MDN-Increment and decrement operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#increment_and_decrement)
[MDN-Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)

## Loops are a fundamental programming tool
- we'll be using loops as a programmer so it's to just become comfortable with writing them.
