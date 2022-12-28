/*
Directions: Rewrite the while loop as a for loop:

let x = 9;
while(x >= 1){
    console.log("hello " + x);
    x = x - 1;
}

Running code:
node change.js
*/

for( x = 9; x >= 1; x--){
    console.log('hello ' + x);
}

/*
Testing code:
hello 9
hello 8
hello 7
hello 6
hello 5
hello 4
hello 3
hello 2
hello 1

*/