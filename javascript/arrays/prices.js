/*
Quiz: The Price is Right
Directions:
Starting with this array of prices, double the prices of the 1st, 3rd, and 7th elements in the array.

const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
TIP: The 1st element of any array has an index of 0.

Afterwards, print out the prices array to the console.
*/

/*
 * Programming Quiz: The Price is Right (6-3)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The value of the 1st, 3rd, and 7th elements should be doubled
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements. 
 */
 
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
prices[0] = 1.23 * 2;
prices[2] = 90.11 * 2;
prices[6] = 1.10 * 2; 
console.log(prices)
