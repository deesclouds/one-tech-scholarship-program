# Objects

Intro to Objects

Objects allows us to wrap up pieces of related data and functionality into one single container. 
They allow us to store data about a particular thing and helps keep track of that data using a 'key'.

typeof() returns the type of data type

arrays are a type of object

use const to declare objects

Person example:

const sisterName = "Sarah";
const sisterAge = 23;
const sisterParents = ["Alice", "Andy"];
const sisterSiblings = ["Julia"];
const sisterFavoriteColor = "purple";
const sisterPets = true;



## Object Literals

An object allows you group this information into a meaningful structure:
const sister = {
  name: "Sarah",
  age: 23,
  parents: ["Alice", "Andy"],
  siblings: ["Julia"],
  favoriteColor: "purple",
  pets: true
};

This is object-literal notation.

'key': represents a property or method name and it's value separated by a colon.
The key: value pairs are separated by commas
The entire object wrapped in curly braces.

Bracket notation: sister["parents"]
Dot notation: sister.parents

## Methods

paintPicture(){
    return "Sarah paints!";
}
sister.paintPicture();
//returns "Sarah paints!"

sister.name
//returns "Sarah"

## Naming Conventions
don't use numbers in front of object property names
avoid spaces and hyphens : use camelcase instead


To print the email of the following user object:

const user = {
  email: "user@example.com",
  firstName: "first",
  lastName: "last"
};

console.log(user.email)
console.log(user['email'])
