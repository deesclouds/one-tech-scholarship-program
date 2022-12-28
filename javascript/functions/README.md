# Functions

**What are functions?**
Reusable chunks of code.

**What are functions helpful for?**
Functions are helpful as solving problems become more complex.

**What does functions help us do?**
Functions lets us repeat steps on different inputs.

Analogy: Microwaving pizza

The Pizza Reheat button: uses a function to calculate the optimal power level and time to reheat pizza so we don't have to calculate the settings from scratch every time we're hungry.

The input = # of slices need to be reheated

The output = reheated pizza

** Reverse Function Example: **
<img src="images/reverse-function" alt="image of a reverse function">

## Functions Are Awesome!

The ability to generalize code for a variety of possible inputs is a powerful tool when creating easy to understand, non-repetitive doe.

```
function reverseString(reverseMe) {
    let reversed = "";
    for (let i = reverseMe.length - 1; i>= 0; i--){
        reversed += reverseMe[i];
    }
    return reversed;
}
console.log(reverseString("Julia"));

//prints 'ailuJ'
```
## Parts of a function:

- The function takes in one parameter = variable named reverseMe
- reverseME will store the argument - the value of the string that we want the function to operate on.
- The variable reversed is initialized as an empty string. It will be used to store the reversed string as it is being constructed.
- The function loops through each character the reverseMe string using string indexes, from the end to the beginning and adds each character to reversed. 
- Whe the loop is complete, reversed is returned.

Same function with comments:
// Set one parameter to hold the value of the input string
```
function reverseString(reverseMe) {
 ```
    // Declare a variable with an empty string to store the reversed string
 ```
    let reversed = "";
 ```   
    // Loop through the `reverseMe` string from back to front
 ```   
    for (let i = reverseMe.length - 1; i >= 0; i--) {
 ```   
        // Add each character to the end of `reversed`
 ```   
        reversed += reverseMe[i];
    }
 ```   
    // Return the completed string when the loop is complete
```    
    return reversed;
}

console.log(reverseString("Julia"));
```

Using a function simplifies the process and allows us to reuse the function by calling it by its name and passing in a string. If these steps were not wrapped inside this reverseString function we would write all of this code each time we needed to reverse a string. 

## How to Declare a function

Functions allow us to package up lines of code that we can use and reuse in our programs. 

Sometimes they take parameters like the pizza button. reheatPizza() had one parameter: the number of slices.

function reheatPizza(numSlices){
    // code figuring out the reheat settings
}

function reverseString(reverseMe){
    //code reversing the string
}

## Multiple Parameters
We separate parameters with a comma.

function doubleGreeting(name, otherName){
    // code greeting both people
}

We can also have functions that don't have any parameters. Instead, they just package up code and perform some task..We would leave the parentheses empty.

function sayHello() {
    const message = "Hello!"
    console.log(message);
}

If we tried pasting any  functions above the JS console, we probably wouldn't notice much. We'd see undefined.

Undefined is the default return value on the console when nothing is explicitly returned using the special return keyword.

## Return statements

In the sayHello() function, a value is printed to the console with console.log(), but not returned with a return statement. 

We can write a return statement using the return keyword followed by the expression or value we want to return.

function sayHello(){
    const message = "Hello!"
    return message;
}

## How to run a function

To get our function to do something, we have to invoke or call the function using the function name, followed by parentheses with any arguments that are passed into it. 

Functions are like machines. We can build the machine, but it won't do anything unless we turn it on. 

Here's how we would call the sayHello() function from before, and use the return value to print it to the console.

function sayHello(){
    const message = "Hello!";
    return message;
}
console.log(sayHello());

//prints "Hello!"

## Parameters vs. Arguments

It can be tricky to know if something is a parameter or an argument. 

The difference is how they show up within our code.

A parameter is always going to be a variable name and appears in the function declaration. 

An argument is going to be a value and always appear in the code when the function is called or invoked.

