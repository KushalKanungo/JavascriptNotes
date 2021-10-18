// For In loop is used in Objects

// Syntax 

// for(key in objects){

// }

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {                        // x is key in object
  console.log(person[x]);
}

