let myName = "Kushal";

let text = 'We are the so-called "Vikings" from the north.'; //To use double quotes in String

// String Methods

let example = "Hello Kushal here!";

myName.length; //Will return 6;

console.log(example.slice(1, 5)); //Slice from 1 to 5  //It also support negative values.

console.log(example.slice(5)); //Remove before 5 and return rest string .

example.substring(2, 6); //It is same as slice but it cannot accept negative values.

example.substr(5, 4); //It is same as slice but second parameter is length instead of index

text = example.replace("Kushal", "Ram"); 
//Replace Kushal to Ram it do not change the main String We have to create new

example.replace(/Kushal/g, "Ram"); // /g glabal match replace all kushal present in this string

console.log(text);

console.log(example.toLowerCase()); // returns the lowercase of string
console.log(example.toUpperCase()); // returns the upperase of string


//Concat Method
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

// or 

text3= text1+" "+text2;

let whitespace="    Kushal    ";
console.log(whitespace.trim()); //Removes white space in the string

console.log(myName.padStart(4,0)); //Adds 4 zeros at start and padend will be same

console.log(myName.charAt(2)); //Returns car at 2nd Index
//OR
myName[2]; //same as charAt()

console.log(example.split("")); //Slits at "" and returns an  array can split at space " " <-- Like this


//Search a String

example.indexOf("Kushal"); //Returns index of Kushal

example.lastIndexOf("Kushal"); //Returns index of last Kushal occuring in string

// There is also a search("Kushal") but it is not powerful as indexof()

let texti = "The rain in SPAIN stays mainly in the plain";
texti.match(/ain/g)  //Returns a array [ain, ain, ain]

texti = "Hello world, welcome to the universe.";
texti.includes("world")  //Returns True or false Boolean Value

// Some more methods
example.startsWith("Hello"); //Returns True

example.endsWith("Hello"); //Returns False


// Template literals 
// Use back tics ` ` rather than double quotes " "
// We can use variables insde literals
myName="KUSHAL"
let literals=`My name is ${myName}`;    // Use variables in literals by using ${}

console.log(literals);
