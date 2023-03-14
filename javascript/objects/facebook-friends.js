/*
Quiz: Facebook Friends
Directions:
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings) -- include at least two messages.
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
HINT! Here are some array methods you might want to use:

addition at the end is done using the push() method - MDN: Array.prototype.push()
addition or removal at a specific index is done using the splice() method - Array.prototype.splice()
deletion from the end is done using the pop() method - MDN: Array.prototype.pop()
*/


/*
 * Programming Quiz: Facebook Friends
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


const facebookProfile = {
    name: 'Dee',
    friends: 800,
    messages: ['Hello World', 'Studying at Udacity'],
    postMessage(messages){
        facebookProfile.messages.push(messages)
    },
    deleteMessage(index){
        facebookProfile.messages.splice(index)
    },
    addFriend(friends){
        facebookProfile.friends += 1;
    },
    removeFriend(friends){
        facebookProfile.friends -= 1;
    }
}


// text code
console.log("Name: ", facebookProfile.name);
console.log("Messages: ", facebookProfile.messages);
facebookProfile.postMessage("New message!");
console.log("Messages: ",  facebookProfile.messages);
facebookProfile.deleteMessage(2);
console.log("Messages: ",  facebookProfile.messages);
console.log("Friends: ", facebookProfile.friends);
facebookProfile.addFriend();
console.log("Friends: ", facebookProfile.friends);
facebookProfile.removeFriend();
console.log("Friends: ", facebookProfile.friends);