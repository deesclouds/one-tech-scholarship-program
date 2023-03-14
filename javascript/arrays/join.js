/*
Quiz: Joining the Crew
Directions:
In an earlier exercise, you created a crew array to represent Mal’s crew from the hit show Firefly.

const captain = "Mal";
const second = "Zoe";
const pilot = "Wash";
const companion = "Inara";
const mercenary = "Jayne";
const mechanic = "Kaylee";

const crew = [captain, second, pilot, companion, mercenary, mechanic];
Later in the show, Mal takes on three new crew members named "Simon", "River", and "Book". Use the push() method to add the three new crew members to the crew array.

const doctor = "Simon";
const sister = "River";
const shepherd = "Book";
*/

/*
 * Programming Quiz: Joining the Crew (6-6)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - Your `crew` array should contain the Serenity\'s original crew and the three new crew members
 * - Your code should use the `push()` method to add new members to the `crew` array
 * - Print the array on the console at the end
 */


const captain = "Mal";
const second = "Zoe";
const pilot = "Wash";
const companion = "Inara";
const mercenary = "Jayne";
const mechanic = "Kaylee";

const crew = [captain, second, pilot, companion, mercenary, mechanic];

const doctor = "Simon";
const sister = "River";
const shepherd = "Book";

// your code goes here
crew.push(doctor, sister, shepherd)
console.log(crew)
