/*
Directions: Musical groups have special names based on the number of people in the group.

A quartet is a musical group with four musicians. Barbershop quartets were a popular type of quartet in the early 1900s and featured four singers made up of a lead, tenor, baritone, and bass. 

Write a series of conditional statements that:

- Prints 'not a group' if musicians is less than or equal to 0
- Prints 'solo' if musicians is equal to 1
- Prints 'duet' if musicians is equal to 2
- Prints 'trio' if musicians is equal to 3
-Prints 'quartet' if musicians is equal to 4
-Prints 'this is a large group' if musicians is greater than 4

Hint" it we aren't sure how to proceed, try drawing a flow chart to outline the decision points and how the decision is made at each point

Enter node musical-groups.js to run your code.
*/

const musicians = 79;

if (musicians === 0){ 
    console.log("Not a group");
}else if (musicians === 1){
    console.log("Solo");
}else if ( musicians === 2){
    console.log("Duet");
}else if ( musicians === 3){
    console.log("Trio");
}else if ( musicians === 4){
    console.log("Quartet");
}else {
    console.log("This is a large group");
}