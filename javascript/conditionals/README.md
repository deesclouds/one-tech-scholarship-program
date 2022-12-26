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

Adding an extra else if statement, we're adding an extra conditional statement. 

If it's not going to snow, then the code will jump to the else if statement to see if it's going to rain. If it's not going to rain, then the code will jump to the else statement. 

The else statement acts as the "default" condition in case all the other if statements are false.

[!What-To-Wear-Flowchart](https://video.udacity-data.com/topher/2017/January/586e9836_what-to-wear-flowchart/what-to-wear-flowchart.jpeg)

[!MDN-Else-if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else#description)

## More Complex Problems

With more complex problems there's more things to consider before we can actually solve the problem. 

We can represent complex problems by combining logical expressions with special operators called logical operators. 

Ex: this is how Julia figures out here weekend plans:

var colt = "not busy";
var weather = "nice";

if (colt === "not busy" && weather === "nice") {
    console.log("got to the park");
}

returns: "go to the park"

The '&&' symbol is the logical AND operator, this is used to combine two logical expressions into one larger logical expression.

If both smaller expressions are true, then the entire expression evaluates to true. If either one of the smaller expressions is false, then the whole logical expression is false.

Another way to think about it is when the && operator is placed between the two statements, the code literally reads, "if Colt is not busy AND the weather is nice, then go to the park".

## Logical expressions

Logical expressions are similar to mathematical expressions, except logical expressions evaluate to either true or false.

11 != 12
returns true

We've already seen logical expressions when we write comparisons. A comparison is just a simple logical expression. 

Similar to mathematical expressions that use +, -, *, / and %, there are logical operators %%, || and ! that we can use to create more complex logical expressions. 

## Logical operators

Logical operators can be used in conjunction with boolean values (true and false) to create complex logical expressions. 

By combining two boolean values together with a logical operator, we can create a logical expression that returns another boolean value. 

&&      Logical AND         value1 && value 2       Returns true if both value 1 AND value 2 evaluate to true

||      Logical OR          value1 || value 2       Returns true if either value 1 OR value 2 evaluate to true

!       Logical NOT         !value1         Returns the opposite of value 1. If value1 is true, then !value1 is false.

Tip: Logical expressions are evaluated from left to right. Similar to mathematical expressions, logical expressions can also use parentheses to signify parts of the expression that should be evaluated first.

[!MDN-Logical-Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

## Truth Tables

Truth tables are used to represent the result of all the possible combinations of inputs in a logical expression. A represents the boolean value on the left-side of the expression and B represents the boolean value on the right-side of the expression. 

Truth tables can be helpful for visualizing the different outcomes from a logical expression. 

Logical && (AND)

A                    B                      A && B
(evaluates)         (doesn't matter)        (outcome)
true                true                       true
true                false                      false
->false               true                       false
->false               false                      false


Logical || (OR)
A                    B                      A || B
(evaluates)         (doesn't matter)        (outcome)
->true                true                       true
->true                false                      true
false               true                       true
false               false                      false



What is short circuiting?
It describes the event when later arguments in a logical expression are not considered because the first argument already satisfies the condition.

In some scenarios, the value of B in logical AND and OR doesn't matter.

Is if the value of the first part of the logical AND expression is false then it doesn't matter what the second part of the logical expression is because the code will not run. 

Similarly to Logical OR expression is whichever part of the logical expression evaluates to true the result would be true.

