/*
Quiz: Quidditch Cup
In the Harry Potter novels, children attending the Hogwarts School of Witchcraft and Wizardry belong to one of four houses: Gryffindor, Hufflepuff, Ravenclaw, or Slytherin. Each year, the houses assemble a Quidditch team of seven players to compete for the coveted Quidditch Cup. Your task is to help the coach determine if the team has enough players.

Directions:
Create a function called hasEnoughPlayers() that takes the team array as an argument and returns true or false depending on if the array has at least seven players.
*/


/*
 * Programming Quiz: Quidditch Cup (6-5)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a function `hasEnoughPlayers()`
 * - Your function `hasEnoughPlayers()` should accept one parameter
 * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
 * - Return true if the array size is atleast 7, otherwise false. 
 */

// your code goes here

function hasEnoughPlayers(team){
return (team.length >= 7 ? true : false)
}
console.log(hasEnoughPlayers(team1));
console.log(hasEnoughPlayers(team2));
console.log(hasEnoughPlayers(team3));
console.log(hasEnoughPlayers(team4));


// test code
const team1 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
const team2 = ["George Weasley", "Fred Weasley", "Harry Potter"];
const team3 = [];
const team4 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom"];
console.log(hasEnoughPlayers(team1)); // should be true
console.log(hasEnoughPlayers(team2)); // should be false
console.log(hasEnoughPlayers(team3)); // should be false
console.log(hasEnoughPlayers(team4)); // should be true

