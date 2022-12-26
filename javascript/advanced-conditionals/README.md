# Advanced Conditionals

## Truthy and Falsy

Every value in JavaScript is essentially a boolean value.

When the value is evaluated in a boolean expression, the value will be transformed into a boolean value.

**What is a Falsy value?**

It converts to false when evaluated into a boolean. 

List of falsy values:
- false
- null
- undefined
- 0
- "" (empty string)
- odd value NaN

**What is a Truthy value?**

Coverts to true when evaluated as a boolean. 

- true
- 42
- 'pizza'
- '0'
- 'null'
- 'undefined'
- {}
- []

A string is always truthy. It is not the same as the Boolean value true. 

Basically if it's not in the list of falsy values then it will evaluate to truthy.

The || operator requires one or both sides of the expression to be true for the statement to be true.

## Ternary Operators

sometimes we might see a conditional like this:

const isGoing = true;
const color;

if (isGoing) {
    color = "green";
}else {
    color = "red";
}

console.log(color);

// "green"


We can uses if(isGoing) is the same as if(isGoing === true).

We can also use if(!isGoing) the same thing as if(isGoing === false).

So what is the **ternary operator**?
It provides us with a shortcut alternative for writing a lengthy if ... else statement.

```conditional ? (if condition is true) : (if condition is false)```

**How to use the ternary operator?**

First we provide a conditional statement on the left-side of the ?. Then, between the ? and : we write the code that would run if the condition is true and on the right side of the : we write the code that would run if the condition is false. 

Let's rewrite the example code from above as a ternary operator.

const isGoing = true;
const color = isGoing ? "green" : "red";
console.log(color);

// "green"



