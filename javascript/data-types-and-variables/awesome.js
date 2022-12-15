/*
 * Programming Quiz: One Awesome Message
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 *
 * 2. Create `awesomeMessage` variable, and set it to a
 *    message using string concatenation and the variables 
 *    above. The `awesomeMessage` variable should use  
 *    `firstName`, `interest`, and `hobby`
 *
 * 3. The `awesomeMessage` variable should have the correct 
 *    format, as shown below:
 *   "Hi, my name is _____. I love ______. In my spare time, 
 *    I like to ______."
 *
 * 4. Print `awesomeMessage` variable to the console using log() method
 */
 
 /*
 * Example:
 * - Assuming, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to 
 *   produce the following message:
 * 
 *   Hi, my name is Julia. I love cats. In my spare time, I 
 *   like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */
let firstName = "Darnell";
let interest = "to code";
let hobby = "deep house music";

let awesomeMessage = 
"Hi, my name is " + firstName + ". I love " + interest +". In my spare time, I like to play " + hobby + ".";

console.log(awesomeMessage);