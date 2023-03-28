# SHOPPING-CART

This project I am building the core functionality used for a storefront application.
The visual of the storefront and the JavaScript is necessary to connect the code to the visual component created.

Shopping carts are a great tool for practicing JavaScript fundamentals.

Parts of the shopping cart:
- the product listing
- the cart
- the checkout process

Products:
Using object literals, objects are a great way to store product data, and use an array to collect those objects.
Each product will be added to the cart.

Cart:
The shopping cart has a bit of functionality. Once it's populated with products, it needs the ability to increase or decrease the quantity or fully remove an item.
The cart often displays the individual product totals and updates the quantity changes.

Checkout:
It's a cash-only storefront at a street market.
Checkout should show the final amount due for all products in the cart.
Any cash received, the receipt show show what is still owed by the customer or how much should be returned to the customer if they gave more than the total due.

Building professional shopping carts, we almost always have that data stored somewhere so we can access it later for things like accounting, inventory, and returns.

We don't have to worry about a backend at this point, but the work we do with our product objects will set us up well for future projects where we'd have a backend needed for access.

Questions along the way:
- What's the ideal workflow?
- How many JavaScript functions are needed? 
- Do I need additional control flow logic to handle multiple scenarios?
- Should my function be this many lines of code?
- Will creating more functions help with readability and reduce the amount of code?


Make sure you're comfortable with this before starting the project.
- When to use let instead of const.
- Writing a function.
    - What are parameters vs arguments?
    - Should return statement always be included?  
    - How to call a function?
    - Can a function be invoked inside of another function?
- What is control flow, and how can we use it to work with multiple scenarios?
- How can we iterate through an array?
- What is an array, and which methods can we use to work with arrays?
- What is an object literal?
- How do we use dot notation to traverse an object to modify its properties?