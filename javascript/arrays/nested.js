/*
Quiz: Nested Numbers
Directions:
Use a nested for loop to take the numbers array below and replace all of the values that are divisible by 2 (even numbers) with the string "even" and all other numbers with the string "odd".

*/

/*
 * Programming Quiz: Nested Numbers (6-10)
 * QUIZ REQUIREMENTS
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */


var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
// creates a new array to hold the string values
let numsToString = [];

// iterate through every value within the row of the numbers array
 for (let r = 0; r < numbers.length; r++){
    // create an array to hold the row values
    const row = [];
    // iterate through every value within the column of the numbers array
    for (let c = 0; c < numbers.length; c++){
        // if the row and column values within numbers are divisible by 2 
        if(numbers[r][c] % 2 === 0){
         // rename that value even in the numbers array
            numbers[r][c] = 'even';
            // push that string 'even' to the row array and pass in the row and column values from the numbers array
            row.push(numbers[r][c]);
        }
        else{
            // else if the row and column values from the numbers array aren't divisible by 2 we name them with the string 'odd'
            numbers[r][c] = 'odd';
        }
        // push the 'odd' strings to the numsToString array and push the row array as well
        numsToString.push(row);
    }
 }
//  displays the new array numbers
 console.log(numbers)