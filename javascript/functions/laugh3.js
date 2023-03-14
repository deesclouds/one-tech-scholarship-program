/*
 * Programming Quiz: Laugh
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */

// your code goes here
const laugh = function(num){
    let laugh = '';
    for (let i = 0; i < num; i++){
        laugh += 'ha';
    }
    return laugh + '!';
}


// testing your code
console.log(laugh(1));
console.log(laugh(5));
console.log(laugh(10));
