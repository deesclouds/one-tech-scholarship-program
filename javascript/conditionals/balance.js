/*
balance = account balance = >0

isActive = account active = true || false

checkBalance = account balance = true || false

.toFixed(2) = prints out the balance with decimal points
the 2 in parenthesis represent how many decimal places

Running code:
node balance.js
*/

/*
 * Programming Quiz - Checking Your Balance
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
const balance = 325.0;
const checkBalance = true;
const isActive = false;

// your code goes here
if ((checkBalance === false)) {
  console.log("Thank you. Have a nice day!");
} else if ((isActive === true && balance > 0)) {
  console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if ((isActive === false)) {
  console.log("Your account is no longer active.");
} else if (balance === 0) {
  console.log("Your account is empty.");
} else {
  console.log("Your balance is negative. Please contact bank.");
}
