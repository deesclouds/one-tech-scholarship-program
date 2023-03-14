# Arrays - are a special type of object

- They hold lists of data.
- Data structure that we use to store multiple values that are organized by their index.
- The start at 0. 

What is a nested array?
- arrays within an array

best practice to write each nested array on one line for readability.

What is an array constructor?
```const emptyArray = new Array();```
Best practice to use literal notation
const emptyArray = [];

Mixed data arrays are typically not very useful. In most cases, we'll want to use elements of the same type in our arrays.

- *Element*: in an array signifies the individual piece of data
- *Index*: refers to the location within the array

We use ```const``` to declare arrays because JS is reassigning a reference that points to that array. We can change whatever we want inside the array, but we cannot change which array the variable points to. 

- *properties* and *methods* make them powerful 
properties are special pieces of info about a data structure
- length similar to length method for string types

- methods predefined functions
- reverse: reverses the order of elements in an array
- sort: sorts the elements in an array
- push: add elements to the end of an array
- pop: remove elements from an array

tip: type [] into the JS console for a list of all the available Array methods. 

Length: we can find the length of an array by using its length property.
const donuts = ["glazed", "powdered", "sprinked"]
console.log(donuts.length)
<!-- prints 3 -->

The push() method returns the length of the array after an element has been added.

The pop() method used to remove elements from the end of an array.
No need to pass a value since pop() will always remove the last element from the end of the array.
pop() returns the element that has been removed. This is handy if we want to do something with the element that we removed. 

If we want to add or remove elements from anywhere within the array we use splice().
Lets us specify the index location to add new elements, as well as the number of elements we'd like to delete.

```
const donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];

donuts.splice(1, 1, "chocolate cruller", "creme de leche");

// removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1
```

splice syntax 
arrayName.splice(arg1, arg2, item1, ...., itemX);
arg1 = mandatory argument : specifies the starting index position to add/remove items.
can use a negative value to specify the position from the end of the array (-1 specifies the last element)

arg2 = optional argument: specifies the count of elements to be removed. if set to -, no items will be removed

item1, ..., itemX: are items to be added at index position arg1

splice() returns the items() that were removed.

methods:
sort() = sorts elements within an array. numbers are sorted by unicode so we could get 10 to be sorted before the number 2.

reverse() = reverses elements within an array

shift() = removes the first element within the array
splice() = can specify the index of the first element, and indicate what we want removed from the array
slice() = creates a copy of the array between two indices.

join() = returns a new string after concatenation

```
uses a for loop to loop over the index to preform manipulations to an array

const donuts = ['jelly donut', 'chocolate donut', 'glazed donut']

for (let i = 0; i < donuts.length; i++){
    donuts[i] += ' hole';
    donuts[i] = donuts[i].toUpperCase();
}

prints ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]

In this example, the variable ```i``` is being used to represent the index of the array. As ```i``` is incremented, you are stepping over each element in the array starting from 0 until donuts.length - 1 (donuts.length is out of bounds).
```
forEach(): an array method to use like the for loop that allows us to iterate over an array, and manipulate each element within an inline function expression.

```
const donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

Prints:
JELLY DONUT HOLE
CHOCOLATE DONUT HOLE
GLAZED DONUT HOLE
```
for Loop: 
for (let i = 0; i < donuts.length; i++) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
  console.log(donuts[i]);
}

Looping within an array:
forEach() = takes 3 parameters: element, index, array

```
const myArray = ["A", "B", "C", "D"];

function myAwesomeFunction(element, index, array) {
  console.log("Element: ", element);
  console.log("Index: ", index);
  console.log("Array: ", array);
}

myArray.forEach(myAwesomeFunction);
```

element = parameter will get the value of the array element
index = element starting with zero
array = reference to the whole array

```
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

prints: 
Word 0 in cat,in,hat is cat
Word 1 in cat,in,hat is in
Word 2 in cat,in,hat is hat
```

map() : creates a new array using a function


for loops = complete control over the looping process
can define where to start, stop and skip over values and break out the loop early using the break statement

forEach = loop over array from start to finish less versatility than a for loop, can access each element directly without an index.
bot useful if we want to permanently modify the original array

map loops = creates a new array from an existing array 
can take an array, perform operation on each element of the array and return a new one

```
const newArray = myArray.map(function (elem) {
  elem = elem + 100;
  return elem;
});

console.log(newArray); //[101, 102, 103, 104, 105]
```

map accepts one argument, function can be used to manipulate each element in the array. 

