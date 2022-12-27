/*

Write a loop that prints out the following song.

99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!

*/

/*
Attention to Detail is Important in Coding!

Pay attention to the pluralization of the world "bottle" when you go from 2 bottles to 1 bottle to 0 bottles.

It may not seem critical in this code, but what if you were coding a message to be sent out to important customers?

Using incorrect pluralization might cause them to question your organization's competence and ability to meet their needs.

Running Code:

node juice.js

*/


let num = 99;

while(num >= 1){
    if(num === 1){
        // last run with bottle, bottle, bottles
    console.log(num + ' bottle of milk on the wall! ' + num + '  bottle of milk! Take one down, pass it around... ' + (num - 1) + '  bottles of milk on the wall!');
}else if(num === 2){
    // second to last with bottles, bottles, bottle
    console.log(num + ' bottles of milk on the wall! ' + num + ' bottles of milk! Take one down, pass it around ... ' + (num - 1) + ' bottle of milk on the wall!')
}else{
    // all others with bottles
    console.log(num + ' bottles of milk on the wall! ' + num + ' bottles of milk! Take one down, pass it around ... ' + (num - 1) + ' bottles of milk on the wall!')
}
num = num - 1;
}

