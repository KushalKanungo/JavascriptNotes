//.toString()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); //Returns string of comma seperated valuyes

//.pop() removes last element in Array
x = fruits.pop(); // It will remove last element "Mango" and returns popped value;
console.log(x); // Mango

//.push() add new element in array at the end
fruits.push("Kiwi"); // will add Kiwi at end and return length of array

//.shift(); removes the first element
fruits.shift(); //Removes Banana and returns the shifted out value "Banana here"

//.unshift() add new element at start
fruits.unshift("Lemon"); //add lemon at start and return length

// delete Element in Array
delete fruits[1]; // delete 1 indexed element
// But we will not use it it creates undefined holes in an array

//.splice add new items to array at any position
fruits.splice(2, 1, "Lemon", "Kiwi");
// First parameter is for on which posi we want to add
// Second para is for how many elements to remove(we can give zero)
// Third para is elements

// We can remove elements through splice without leaving holes
fruits.splice(0, 1); // Removes first element in fruits array

// concat() merging arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

//.slice() slices out a piece of array into a new array.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); // Returns a """new array""" starts from Orange

const citrus = fruits.slice(1, 3); // Returns 2nd and 3rd element does not include last argument

//.sort() sorts an array
fruits.sort(); 

//.reverse() reverse an array can use after sort to get descending array
fruits.reverse();

//For Numeric sort
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});  // It is a Compare Function

//Sorting in random order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()}); 

//Index of 
points.indexOf(100); //return 1 

