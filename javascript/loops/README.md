# Loops

How to harness the power of JavaScript loops to reduce code duplication and automate repetitive tasks.

**What are loops?**

They control the flow of code allowing us to execute a block of code multiple times.

- while loops
- for loops
- nested loops

loops lets us iterate over values and repeatedly run a block of code.

## Parts of a while loop

There are many different kinds of loops that essentially do the same thing: repeat an action multiple times

Three main pieces loops should have:
- when to start: defining the starting value of a variable 
- when to stop: logical condition to test whether the loop should continue
- how to get to the next item: incrementing or decrementing step

**What is an infinite loop?**
A loop missing a stop condition.

**What do infinite loops do?**
The run forever and can crash your browser.

Read more about while loops [MDN-while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)


**What should loops always include?**
- Where to start
- When to stop
- How to get to the next item

It's easy to forget some of these pieces in a while loop and end up with an infinite loop that crashes your browser.

for loops gives us more control over the looping process. 