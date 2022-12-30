// Checks if a number is prime and if not what is the number divisible by it.

function isPrime(integer)
 for(let i = 2; x < integer; x++){
    if(integer % x === 0){
        console.log(integer + " is divisible by ") + x;
        return false;
    }
 }   

 return true;

 