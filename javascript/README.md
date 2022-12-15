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

## Indexing

We can access an individual character in a string. To access this character we can use the character's location in a string called its index. Just place the index of the character inside square brackets starting with [0] as the first character immediately after the string. 

"James"[0];
Returns: "J"

or commonly seen like this:
const name = "James";
name[0];
Returns: "J"

Characters within a string are indexed starting from 0, where the first character is at position 0, to n-1, where the last character is at position n-1 (n represents the total number of characters within a string).

We can use the String's charAt() method to access individual characters. 

const quote = "Stay awhile and listen!";
console.log(quote[6]);

Ex: quote.charAt(6) would return "w".

## Escaping strings

"The man whispered, "please speak to me.""

Uncaught Syntax Error: Unexpected identifier

'\' use this to escape a string

Escaping a character tells JS to ignore the character's special meaning and just use the literal value of the character. This is helpful for characters that have special meanings like in our previous example with quotes ```""```.

Because quotes are used to signify the beginning and end of a string, you can use the backslash character to escape the quotes in order to access the literal quote character. 

console.log("The man whispered, \"please speak to me.\"")

Returns: The man whispered, "please speak to me."

This guaranteed that the JavaScript engine doesn't misinterpret the string and result in an error.

## Special characters

Quotes aren't only special characters that need to be escaped, there's actually quite a few. 

A list of some common special characters in JS.

Code	Character
\\	    \ (backslash)
\"	    '' (double quote)
\'	    ' (single quote)
\n	    newline
\t	    tab

\n and \t : are unique because they add additional whitespace to your Strings. 
A newline character will add a line break and a tab character will advance your line to the next tab stop.

"Up up\n\tdown down"
Returns:
Up up
    down down

"The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names.txt\" contains the names on the roster."

Returns:
 "The file located at "C:\\Desktop\My Documents\Roster\names.txt" contains the names on the roster."

## Comparing Strings

Comparison operators can also be used to compare strings.

"Yes" == "yes"
Returns: false

a. Case-sensitive
- when comparing strings, case matters. While both strings use the same letters (and those letters appear in the same order), the first letter in the first string is a capital Y while the first letter in the string is a lowercase y.

'Y' != 'y'
Returns: true

b. Internal Working
- strings are compared character-by-character in alphabetical order. Each character has a specific numeric value, coming from [!ASCII value of printable characters](https://en.wikipedia.org/wiki/ASCII#Printable_characters).
Ex: 'A' = 65, 'a'= 97

[!ASCII table](http://www.ascii-code.com/)

How to loop through the characters in a string and print the ASCII values of all the characters.
```
const my_string = "Udacity";

// Iterate using a Loop
for (let i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}
```

## Booleans

Boolean variables can take a value of true or false.

Yes or no
On or off
1 or 0

A boolean variable is mainly essential in evaluating the outcome of conditionals (comparisons). 

The result of a comparison is always a boolean variable.

True values will run
False values will NEVER run


## Null, Undefined, and NaN

What is the difference between null and undefined?

Null refers to the "value of nothing".
Has no value. Means it's totally empty. It was purposely assigned a value of nothing. 

Undefined refers to the "absence of value".

Undefined:
Exists but doesn't have a value yet.

What is NaN?
NaN stands for "Not-A-Number" and it's often returned indicating an error with number operations. 

If we wrote code that performed a math calculation, and the calculation failed to produce a valid number, NaN might be returned.

//calculating the square root of a negative number will return NaN.
Math.sqrt(-10)
//trying to divide a string by 5 will return Nan
"hello"/5

let signedIn;
console.log(signedIn);
Returns: undefined

This occurs because the variable exists but a value was not assigned yet. 

## Equality

Using comparison operators in situations where the values we're comparing have different data-types, it could lead to some interesting results. 

Ex: "1" == 1
returns: true

0 == false
returns: true
* unable to differentiate 0 from false *

' ' == false
returns: true. 
both the operands on either side of the == operator are first converted to zero, before comparison.

Reason for this is Type Conversion. 

The case of regular comparison, the operands on either side of the == operator are first converted to numbers, before comparison. Therefore ' ', false, and 0 are all considered equal. Similarly, a '1' and 1 are also considered equal. If we don't want to convert the operands, before comparison, we have to use a strict comparison ===. that is explained below. 

## Implicit Type Coercion

JavaScript is known as a loosely typed language.

Basically JavaScript code, you do not need to specify data types. When code is interpreted by the JavaScript engine it will automatically be converted into the "appropriate" data type. This is implicit type coercion.

"julia" + 1
returns: "julia1"

the number 1 is converted into the string "1" and concatenated to the string "julia".

This makes JS unique from other programming languages, but can lead to some quirky behavior when doing operations and comparisons on mixed data types.

## Strongly Typed vs Loosely Typed

Strongly typed language is programming language that is more likely to generate errors if data does not closely match an expected type.

ex:
int count = 1;
string name = "Julia";
double num = 1.2932;
float price = 2.99;

Loosely typed language don't need to specify data types; this provides a lot more flexibility and is often faster to write. Loose typing can lead to errors that are hard to diagnose due to implicit type coercion.

let count = 1;
const name = "Julia";
const num = 1.2932;
const price = 2.99;

## Strict Vs Loose Equality

"1" == true
Returns: true

When using == or != operators, JS first converts each value to the same type if they're not already the same type this is why it's called type coercion!

This is often no the behavior we want and it's actually considered bad practice to use == and != operators when comparing values for equality.

Instead it's better to use strict equality to see if numbers, strings, or booleans, etc. are identical in type and value without doing the type conversion first. 

"1" === 1
returns false

this returns false because the string "1" is not the same type and value as the number 1


Strict equality and strict non-equality

=== and !==

0 !== true
returns: true

"Hello" % 10
and 
"Number(Hello)"

returns: NaN

When testing for equality both Type Conversion and Strict Equality can influence the result of the expression.
"3" > 1 is true because 3 is greater than 1 (implicit type coercion)
true >= 0 is true because 1 greater than or equal to 0 (implicit type coercion)
1 !== false is true because 1 does not equal false (strict equality)
3 === 3 is true because 3 equals 3 (strict equality)


## Semicolons
Semicolons makes it clear where one statement ends and another begins. 

This is handy when multiple lines of code are written on the same line (which is valid JavaScript, but definitely not recommended!)

Not adding semicolons to the end of each line can cause bugs and errors in your programs. 

JS has ways to occasionally predict where semicolons should be, like how type coercion can result in some unexpected quirky behavior in JS. 

It's good practice to not depend on it. 




