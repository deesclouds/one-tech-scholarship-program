const x = 4;
const y = 3;
console.log((x + y) > 6 ? 2 * x : 2 * y);

//  (4 + 3) > 6 ? 2 * 4 : 2 * 3
//  4 + 3 = 7 if greater than 6 is true then 2 * 4 = 8 if false 2 * 3 = 6
// so the operation would print 8

const adult = true;
const preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");

// I need to practice this more this one is a bit tricky
console.log("false" ? true : false);
console.log(false ? "false" : "true");
console.log("true" ? "false" : true);
console.log(false ? false : true);
console.log(false ? true : false);
console.log("false" ? false : true);