/*
From the smallest of creatures to the largest of animals, inevitably every living, breathing thing must ingest other organisms to survive. This means that all animals will fall within one of the three consumer-based categories based on the types of food that they eat. 

Animals that eat only plants are called herbivores.
Animals that eat only other animals are called carnivores.
Animals that eat both plants and animals are called omnivores.

Directions:
Write a series of nested ternary statements that sets the variable category equal to: 

- "herbivore" = eats plants
- "carnivore" = eats animals
- "omnivore" = eats plants and animals
- "undefined" = doesnt eat plants or animals

Running Code:
node food-chain.js
*/
const eatsPlants = false;
const eatsAnimals = true;
let category;

// if eatsPlants = "herbivore";
// if eatsPlants && eatsAnimals = "omnivore";
// if eatsAnimals = "carnivore"; 
// if !eatsPlants && !eatsAnimals = "undefined" 

category = eatsPlants && eatsAnimals? "omnivore" : "undefined" && eatsAnimals ? "carnivore" : "herbivore" && eatsPlants ? "herbivore" : "undefined";

console.log(category);
/*
Testing Code:
EatsPlants	 Eats Animals	Expected Output
true	      false	        "herbivore"
true	      true	        "omnivore"
false	      true	        "carnivore"
false	      false	        undefined
*/
