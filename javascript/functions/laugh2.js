/*
Directions:
- Declare a function called laugh() that takes one parameter, num.

- The function should return a string with num number of "ha"s.

- The string should end with an exclamation point "!".

Tip: we might need a loop to solve this!

example output: 
console.log(laugh(3));

Running code: 
node laugh1.js
*/

let msg = '';
function laugh(num){
   for(let i = 0; i < num; i++){
    msg = msg + "ha";
   }
   msg = msg + '!';
   return msg;
}
console.log(laugh(3));


/*
Testing code:
!
!hahaha!
!hahaha!hahahaha!
!hahaha!hahahaha!hahahahahahahaha!
*/