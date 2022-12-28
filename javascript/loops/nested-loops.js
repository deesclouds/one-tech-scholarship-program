for (let x = 0; x < 5; x = x + 1) {
    for (let y = 0; y < 3; y = y + 1) {
      console.log(x + "," + y);
    }
  }

/*
For each value of x in the outer loop, the inner for loop executes completely. The outer loop starts with x = 0, and then the inner loop completes its cycle with all values of y:

x = 0 and y = 0, 1, 2 // correspond to (0,0), (0,1), and (0,2) 

Once the inner loop is done iterating over y, then the outer loop continues to the next value, x = 1, and the whole process begins again.

x = 0 and y = 0, 1, 2 // (0, 0) (0, 1) and (0, 2)
x = 1 and y = 0, 1, 2 // (1, 0) (1, 1) and (1, 2)
x = 2 and y = 0, 1, 2 // (2, 0) (2, 1) and (2, 2)
etc.

Note: Nested loops can be tricky at first and will come up again when we start working with arrays, which are lists of data.

Loops are very helpful when working with arrays.
*/