/*
Quiz: Another Type of Loop
Directions:
Use the array's forEach() method to loop over the following array and add 100 to each of the values if the value is divisible by 3.

const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
Log your solution to the console.
*/

/*
 * Programming Quiz: Another Type of Loop (6-8)
 * QUIZ REQUIREMENTS
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
 *  - Inside the loop, you can update an element ONLY by using the arrayName[index]
 *  - Outside the loop, you can use `console.log` to verify the `test` variable 
 */

const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

// Write your code here
function addHundredDivisibleByThree(num){
    let test = []
    num.forEach( n => {
        if( n % 3 === 0){
            test.push(n + 100)
        }else{
            test.push(n)
        }
    })
    return test
}
console.log(addHundredDivisibleByThree(test))