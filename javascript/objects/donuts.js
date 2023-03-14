/*
Quiz: Donuts Revisited
Here is an array of donut objects.

const donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
Directions:
Use the forEach() method to loop over the array and print out the following donut summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each
If you need a refresher on the forEach method, check out the documentation: MDN - Array.prototype.forEach()
*/

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an array named `donuts`
 * - Your `donuts` array should call the `forEach()` method
 * - Your `forEach()` loop should output the donut summaries
 * - Be careful about the punctuation, spacing, and spelling of the printed message.
 */

// This is an array of objects. 
const donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];


donuts.forEach(function(donut){
    console.log(donut.type + ' donut cost $' + donut.cost + ' each')
})