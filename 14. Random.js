// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)

// for random integer 
Math.floor(Math.random()*10); // Return 0 to 9

// we can create our own random function 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  } 
   
