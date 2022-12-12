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

