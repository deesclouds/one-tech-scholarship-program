# Switch Statements

**What is a switch statement?**

It's just another way to chain multiple else if statements that are based on the same value without using conditional statements. 

We use switch statements to switch which pieces of code we want to execute base on it's value.

```
switch (option) {
  case 1:
    console.log("You selected option 1.");
  case 2:
    console.log("You selected option 2.");
  case 3:
    console.log("You selected option 3.");
  case 4:
    console.log("You selected option 4.");
  case 5:
    console.log("You selected option 5.");
  case 6:
    console.log("You selected option 6.");
}   
```

When the switch statement evaluates, it starts at the top and looks for a case clause whose expression evaluates tot he same value as the result of the expression passed to the switch statement. 

After it finds a match, it transfers to the case clause to run the code for that case. 

## Use Break to Avoid Falling Through

**What is falling through?**

When the switch statement continues to run all of the code below through the following statements.

**How do we prevent this?**

We implement the word break statement. 

**What is the break statement?**

Break: terminates the switch statement and transfers control to the following code so the switch statement can stop executing the following code.

```
const option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}
```
## Default Case

**What is the default case?**

To catch situations when there are no matching cases.

```
const option = 23;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break;
  default:
    console.log("You did not select a valid option.");
}
```

It is good practice to always set a default case. 

Does it matter where we place our default case?

NO

[MDN Docs:Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

Breaking problems down into smaller logical steps is all about being a good programmer. 

Statements and logical operators will help solve even the most complicated problems. 

Things to work on:
- Truthy & Falsy
- Ternary Operator
- Switch Statements