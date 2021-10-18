// JS has only one type of number

 x = 10;
 x2 = 20;
 y = "20";
 let t = x + y; // z will be a string "1020"

t = x + x2; // result will be 30;
t = "The result is " + x + x2; // result will be "1020"

x = 10;
y = 20;
t = "30";
result = x + y + t; // Result will be 3030
// The JavaScript interpreter works from left to right.

// First 10 + 20 is added because x and y are both numbers.

// Then 30 + "30" is concatenated because z is a string.

// Js will try to use all numeric operation on string if they are no. except '+'

x = 100 / "Apple"; // It will return NaN(Not a Number)

x = 2 / 0; // x will be Infinity

console.log(typeof Infinity); //returns a number

// Number Methods

x=123;
y= x.toString();  // Returns number as a string 
console.log(typeof y);

x = 9.656;
x.toFixed(0);  // Returns 10 as a string
x.toFixed(4); //Returns 9.6560 (upto decimal number specified)

// toFixed(2) is perfect for working with money.

// toPrecision() returns a string, with a number written with a specified length:
x.toPrecision(2); // Returns 9.7

// Covert to numbers
// 1. Number()
// 2. parseInt()
// 3. parseFloat()

Number("Kushal"); // Will return NaN

