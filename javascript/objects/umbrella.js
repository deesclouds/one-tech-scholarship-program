/*
 * Programming Quiz: Umbrella
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `umbrella`
 * - The variable `umbrella` should be an object
 * - Your `umbrella` object should have the `color` and `isOpen` property
 * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
 * - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
 */

const umbrella = { 
    color: "pink",
    isOpen: false,
    isClose: false,
    open: function() { 
      if (umbrella.isOpen === true) {
        return "The umbrella is already opened!";
      } else {
        umbrella.isOpen = true;
        return "Julia opens the umbrella!";
      }
     },
    // your code goes here
    close: function(){
        if (umbrella.isClose === true){
            return "The umbrella is already closed!";
        }else{
            umbrella.isClose = true;
            return "Julia closes the umbrella!";
        }
    }
  };
  
  
  // test code
  console.log(umbrella.open());
  console.log(umbrella.close());