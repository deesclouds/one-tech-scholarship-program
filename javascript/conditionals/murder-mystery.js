/*
Directions: We're solving a fictitious murder mystery that happened here at Udacity! A [!murder mystery](https://en.wikipedia.org/wiki/Murder_mystery_game) is a game typically played at parties wherein one of the party goers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of [!whodunnit](https://en.wikipedia.org/wiki/Whodunit).

Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. Here's what we know! 

There are:
- 4 rooms: the ballroom, gallery, billiards room, and dining room
- 4 weapons: poison, a trophy, a pool stick, and a knife.
- 4 suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.

Each weapon corresponds to a particular room:
- poison = ballroom
- trophy = gallery
- pool stick = billiards room
- knife = dining room

Each suspect was located in a specific room at the time of the murder:
- Mr. Parkes = dining room
- Ms. Van Cleve = gallery
- Mrs. Sparr = billiards room
- Mr. Kalehoff = ballroom

To solve this mystery, write a combination of conditional statements that:
1. sets the value of weapon based on the room and

2. sets that value of solved to true if the value of room matches the suspect's room

Afterwards, use this template to print a message to the console if the mystery was solved:

_ did it in the _ with the _ !

What goes into the three blank spaces? You can fill the blanks with the suspect, the room, and the weapon!

Ex: Mr. Parkes did it in the dining room with the knife!

===
Running code in the terminal:

node murder-mystery.js

===
Testing Code:

How will we know if our code works?

Change the values of room and suspect and re-run the code. If the case is solved, we should get the solution printed in the console.

"Ms. Van Cleve did it in the gallery with the trophy!"

If the case is not solved, you should get a message saying:
"The case is not solved!"

Expected Outcomes:

room	            suspect	                Case is Solved?
dining room	         Mr. Parkes	                Yes
gallery	             Ms. Van Cleve	            Yes
billiards room	     Mrs. Sparr	                Yes
ballroom	         Mr. Kalehoff	            Yes
billiards room       Ms. Van Cleve	             No
dining room	         Mrs. Sparr	                 No
ballroom	         Mr. Kalehoff	             No
gallery	             Mr. Parkes	                 No

*/

/*
 * Programming Quiz: Murder Mystery
 */
/*
 * QUIZ REQUIREMENTS

 * 1. Your code should have four variables - `room`, `suspect`, `weapon`, and `solved`

 * 2. Your code should include a conditional statement

 * 3. The variable `suspect` should use one of the provided values

 * 4. The variable `weapon` should be based on the `room`

 * 5. Your code should produce the expected output when the case is solved: __________ did it in the __________ with the __________!

 * Example: Mr. Parkes did it in the dining room with the knife!

 */

/* ****************************************** */

/* TESTING LOGIC */

// Change the value of `room` and `suspect` to test your code
const room = "billiards room";

const suspect = "Mr. Parkes";

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/
// Initial values

let weapon = "";

let solved = false;

/*

* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/

if (room === 'ballroom' && suspect === 'Mr. Kalehoff'){
    // True if Mr. Kalehoff was in the ballroom at the time of the murder
    weapon = 'poison';
    solved = true;
} else if (room === 'gallery' && suspect === 'Ms. Van Cleve'){
    // True if Ms. Van Cleve was in the gallery at the time of the murder
    weapon = 'trophy';
    solved = true;
} else if (room === 'billiards room' && suspect === 'Mrs. Sparr'){
    // True if Mrs. Sparr was in the billiards room at the time of the murder
    weapon = 'pool stick';
    solved = true;
} else if (room === 'dining room' && suspect === 'Mr. Parkes'){
    // True if Mr. Parkes was in the dining room at the time of the murder
    weapon = 'knife';
    solved = true;
} else {

}

/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
  console.log(suspect + ` did it in the ` + room + ` with the ` + weapon + ".");
} else {
  console.log("The case is not solved!");
}
/* ****************************************** */
