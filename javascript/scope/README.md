# Scope

**What is scope?**
Scope is a part of the program where a particular identifier, such as a variable or a function name, is visible or accessible.

**What is in scope?**
Where the information is shareable.

**What is out of scope?**
Where the information is not sharable.

**What types of scope are in JS?**
- global scope
- function scope
- block scope

**What is global scope?**
Variables accessible to any other part of the program.

**What is function scope?**
Variables only accessible to that function.

**What is block scope?**
Limits the scope of a variable to the block of code where it is declared.

# How does JS find a variable?
It uses the scope chain.

It starts from the current scope and moves outward:
- the JS engine starts looking in the scope where the variable is requested.
- if it can't find it in the current scope, it moves out one level and checks again.
- it keeps moving to the outer scope until it has reached the global scope.
- if the JS engine checks all the outer functions and global scope, and it can't find the identifier it will return a Reference error.

# What is a block?
A group of statements in between curly braces. 

ie. conditional statements, loops

Block Scope only works with:
- let
- const

- if used with var then it becomes a global scope

Never use var instead of let or const.

Global variables can conflict with other global variables of the same name. When programs get larger and more complex it'll get more difficult trying to keep track of what's happening. 

Just always use let and const instead of var. 

## Shadowing

**What is shadowing?**
When variables in different scopes have the same name. When this happens the variable in the inner scope overrides the variable in the outer scope.

## Best Practice: Declare a New Variable

To avoid scope override, always declare a new variable inside our function. This prevents JS from reassigning the value of the variable in the outer scope. 

## Recap:
- Global scope = available everywhere
- Function scope = available in the function it was declared
- Block scope = with (var) is available in the block and in the outer scope of the block it was declared in
- Block scope = with (let or const), only available in the block it was declared in
- Accessing an identifier, JS will look first in the current function. 

If it doesn't find anything, it will continue to the next outer function to see if it can find the identifier there. 

It will keep doing this until it reaches the global scope.

- Global identifiers are a bad idea. They can lead to bad variable names, conflicting variable names, and messy code.