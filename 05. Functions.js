//Syntax
function funcname(parameter1, parameter2){          //There can be any no. of parameters
    return parameter1*parameter2 // return value is not always necessary
}

//calling a function

funcname(3, 4);   //return 12 a number
console.log(funcname(8, 15))

// functions can be called as many times we want it will our code smaller 

// '()' <-- This Operator invokes a function or calls a function

//Variables declared in a functions become local variables means within function

function myFunction() {
    let carName = "Volvo";
  }

//console.log(carName); 
//It will give error as its value is not defined outside the function

// arrow function 
hello = () => {
  return "Hello World!";
}