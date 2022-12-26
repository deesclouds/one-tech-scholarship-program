/*
Directions: Ice cream is one of the most versatile desserts on the planet because it can be done up so many different ways and every ice cream shop offers a different set of flavors, toppings and serving vessels.

Using logical operators, write a series of complex logical expressions that evaluates a customer order and prints an appropriate response.

If the order can be filled, respond with: 
"Great choice! Your ice cream is at the next window."

If the order cannot be filled, respond with:
"Please check our menu and try again."

Ice Cream Flavors:
- Vanilla or Chocolate

Toppings:
- Sprinkles or Peanuts

Vessel:
- Wafer Cone or Sugar Cone

Running code:
node ice-cream.js
*/

const flavor = "chocolate";
const topping = "bananas";
const vessel = "sugar cone";

// your code goes here

if ((flavor === 'chocolate'|| flavor ==='vanilla') && 
(topping === 'sprinkles' || topping === 'peanuts') &&
(vessel === 'sugar cone' || vessel === 'wafer cone')){
    console.log("Great choice! Your ice cream is at the next window.")
}else{
    console.log("Please check our menu and try again.")
}

/*
Testing Our Code
Flavor	        Topping	    Vessel	        Response
chocolate	    bananas	    wafer cone	    "Please check our menu and try again."
chocolate	    peanuts	    wafer cone	    "Great choice! Your ice cream is at the next window."
chocolate	    sprinkles	sugar cone	    "Great choice! Your ice cream is at the next window."
chocolate	    sprinkles	bowl	        "Please check our menu and try again."
strawberry	    sprinkles	wafer cone	    "Please check our menu and try again."
strawberry	    bananas	    sugar cone	    "Please check our menu and try again."
strawberry	    peanuts 	bowl	        "Please check our menu and try again."
vanilla	        sprinkles	wafer cone	    "Great choice! Your ice cream is at the next window."
vanilla	        peanuts	    sugar cone	    "Great choice! Your ice cream is at the next window."
vanilla	        sprinkles	bowl	        "Please check our menu and try again."
*/
