# Conditionals

We Write Code to Solve Problems:

When we writing code, we break down problems into steps that are executed by a computer. 

These steps are known as an algorithm.

Ex: Purchase Algorithm

Steps we need to take to decide whether or not to purchase an item. 

1. Do I want the item?
2. Do I have enough money to purchase the item?

If yes to both questions we'll purchase the item. 

The process we went through to solve that problem and the steps taken to do so, is at the heart of writing code. 

Definition:

A **flowchart** is a visual diagram that outlines the solution to a problem through a series of logical statements. 

The order in which statements are executed is called the **control flow**.

Materials to learn more about Flowchart:
[!Purchase-The-Item-Flowchart](https://video.udacity-data.com/topher/2017/January/586e9791_purchase-the-item-flowchart/purchase-the-item-flowchart.jpg)
[!Approaching-The-Castle-Flowchart](https://video.udacity-data.com/topher/2017/January/586e979e_approaching-the-castle-flowchart/approaching-the-castle-flowchart.jpg)

Flowchart to Code

Solving the Problem: Do I purchase the hammer?

const price = 15.00; //price of hammer
const money = 20.00; //money i have

if (money >= price) {
    console.log("buy the hammer");
} else {
    console.log("don't buy the hammer");
}

## If else Statements

If else statements allows us to execute certain pieces of code based on a condition, or set of conditions, being met. 

if (/* this expression is true */) {
   // run this code 
} else {
    // run this code
}

This is extremely helpful because it allows you to choose which piece of code we want to run bases on the result of an expression.

const a = 1;
const b = 2;

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log(" a is less than or equal to b");
}

this prints "a is less than or equal to b"

A couple of important things to notice about if else statements. 

The value inside are always converted to true or false. 

Depending on the value, the code inside the if statement is run or the code inside the else statement is run, but not both. 

If the code inside the if and else statements are surrounded by curly braces {} to separate the conditions and indicate which code should be run. 

Tip: When coding sometimes you may only want to use an if statement. However, if we try to use only an else statement, then we'll receive SyntaxError: Unexpected token else. 

We'll see this error because else statements need an if statement in order to work. We can't have an else statement without having an if statement. 

Are curly braces always necessary?
Curly braces are not necessary if you have only one line of code to execute following an if or else statement. They are necessary if we have more than one line of code to execute. 

It is best practice to use curly braces whenever conditional statements are being use. 

[!MDN If else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

## More Conditionals!

Sometimes just two conditionals aren't enough.

## Else if statements:
Else if statements represents a secondary check by using an extra if statement. 

```
const weather = "sunny";

if (weather === "snow") {
    console.log("Bring a coat.");
} else if (weather === "rain") {
    console.log("Bring a rain jacket.");
} else {
    console.log("Wear what you have on.");
}

prints: "Wear what you have on."
```

