/*
Directions: 
Theater seats often display a row and seat number to help theatergoers find their seats.

If there are 26 rows and 100 seats in each row, write a nested for loop to print out all of the different seat combinations in the theater.

Output of each row and seat number should be on a separate line.

Running code:
node find-seat.js
*/
let row = 0;
let seat = 0;

for(row = 0; row <= 25; row++){
    for(seat = 0; seat <= 99; seat++){
        console.log(row + "-" + seat);
    }
}
/*
Testing code:
0-0
0-1
0-2
...
25-97
25-98
25-99
 */