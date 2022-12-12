# Javascript

## Numbers

 Number data type includes any positive or negative integer, including decimals.

 ## Arithmetic Operators

 Name	                Operator	        Meaning
Addition	              a + b	            Adds a and b
Subtraction	              a - b         	Subtracts b from a
Multiplication	          a * b	            Multiplies a and b
Division	              a / b	            Divides a by b
Modulo	                  a % b	            Returns the remainder of a / b
Exponent	              a ** b	        Raises a to the power of b

## Modulus

Returns the remainder of a division operation. '%'

## Comparison Operators

Operator	Meaning
<	        Less than
>	        Greater than
<=	        Less than or Equal to
>=	        Greater than or Equal to
==	        Equal to
!=	        Not Equal to

TIP: The values true and false have significant importance in JavaScript. These values are called Booleans and are another data type in JavaScript. Later in this lesson, you’ll learn more about why Booleans are so important in programming.

A function that reverses the order of characters in a word

'Hello' => 'olleH'

function rev(w) {
    var revw = '';
    // loops over the characters in reverse order
    for (var i = w.length - 1; i >= 0; i--){
        // adds characters to a new word
        revw = revw.concat(w[i]);
    }
    return revw;
}

## Comments

Comments help explain your code and make things clearer. In JS, comments are marked with a double forward slash '//'. Anything written on the same line will not be executed or displayed.

/*...*/ These are for comments that will span multiple lines. Anything written inside these will also not be executed or displayed.

Comments are used to clarify and document complex code. This helps improve readability, often makes more sense to reduce the complexity by refactoring and simplifying code. Simpler code is better code. 


## Data Type & Variables

### Strings
Can be any combination of characters --letters, numbers and even emojis

- Must have matching quotes at the beginning or end of a string -- otherwise JS thinks we're referring to a variable

Either double "" or single '' quotes can be used with strings as long as it's consistent. Udacity suggests single quotes to be used when defining string literals.

Always follow your team's style guide. 

### String concatenation

Strings are a collection of characters enclosed inside double or single quotes. Can be used to represent data like sentences, names, addresses and more. 

Concatenating are adding strings together.

"Hello," + " New York City"

Returns: "Hello, New York City"

If you want to have a space between two words, we need to explicitly add a space. It will not be done automatically.

What does "Hello + 5*10 " return in the console?
Returns "Hello + 5*10". This is because it is a string! Anything within the quotation marks are assumed the whole object is a string so the output would be a string.

What about... "Hello " + 5*10
Hello50

This will return implicit type coercion. It is a feature of JavaScript. JS multiplies 5*10 to become 50 then changes the number 50 into the string "50", so we're adding together the same data type. This then gets combined with the string "Hello".

## Variables 

Variables allows us to store data.

storing a string in a variable is like packing it away for later use. 

let greeting = "Hello";

greeting + " World!";

returns: Hello World!

### 3 Ways to Declare Variables
***var, let, and const***

var = global scope: can be used anywhere in our program.

Globally scoped variables are not good practice. 

Why?

In a small program with just a few variables, it's easy to keep track of the variables and avoid collisions. But when working on a complex project or with a large team. It is very easy to inadvertently overwrite an existing variable that is hidden in another part of the program. 

let and const avoid this issue because they are only available in the scope where they are declared. 

BEST PRACTICE #1
***always use let or const instead of var***

Which to Use - let or const?

let: when we think the value of a variable may change.
- let lets us assign a new value to the variable name when needed.

const: when we think the value of a variable is fixed
- a variable declared with const cannot be assigned a new value. It's value is constant.

Which should be default choice?

Pick one that gives you more control. 
Const means that you program will throw an error if there is an attempt to change the value of the variable when the code runs. If that is an intended outcome, you can go back and revise your code to declare the variable with let. If you did not intent for the value to change, congratulations! You've just discovered a bug that you can fix before it causes any problems!

BEST PRACTICE #2
If you aren't sure to use const, You can revise your code later to replace the const with let if needed.

Practice let and const

- TypeError when we try to assign a new value to a variable declared with const.

- use let to declare the variable which allowed us to reassign it's value

- ```let dinner = 'tacos';
const dinner = 'tamales';
console.log(dinner);```

SyntaxError  because we are not allowed to re-declare a variable that has been declared with let. 

var still works and will remain working for the foreseeable future!
You'll see that we use var instead of let and const in some of the demo videos in this course. While all of the modern browsers support let and const, var is still part of the language. You'll see it quite often in legacy code. 

## Naming conventions

When creating a variable, we write the name of the variable using camelCase. The first word is lowercase, and the following words are uppercase. Also use a variable name that accurately, but succinctly describes what the data is about. 

```
const totalAfterTax = 53.03; // uses camelCase if the variable name is multiple words
const tip = 8; // uses lowercase if the variable name is one word
```

Not using camelCase won't necessarily break anything in JS. But there are recommended style guides used in all programming languages that help keep the code consistent, clean , and easy-to-read.

This is important when working on larger projects that will be accessed by multiple developers.

[!Google's Javascript StyleGuide.]
(https://google.github.io/styleguide/jsguide.html)

JavaScript is very lenient about naming. Following naming conventions is important to help the people looking at the code understand it. The machine that runs it doesn't care. 



