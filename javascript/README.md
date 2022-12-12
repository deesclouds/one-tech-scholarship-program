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



