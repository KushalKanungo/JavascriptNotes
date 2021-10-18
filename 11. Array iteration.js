const numbers = [45, 4, 9, 16, 25];





//arr.foreach() function iterate a Array

numbers.forEach(myFunction);

function myFunction(value, index) {             //First argument for value an second for Index
    console.log(value);

}




//arr.map() function  to create a new array
const numbers2 = numbers.map(mapfunction);

function mapfunction(values, index) {

    return values * 2;
}





//arr.filter  function to filter an array and create a new array

const number3 = numbers.filter(filterfunction);

function filterfunction(values, index) {
    return values > 10;
}


//arr.reduce function to reduce from left to right and gives one value
let sum = numbers.reduce(reducefunction);

function reducefunction(total, values, index) {
    return total + values;

}

//arr.reduceRight()


//arr.every() function check and pass a test and return a boolean
//arr.some() true if one of them is true
let over18 = numbers.every(everyfunction);
function everyfunction(values) {

    return values > 18;
}



console.log(numbers.indexOf(45));

numbers.includes(45);  // Return true if it finds 45

numbers.find(findfunction);    // Return first value it find condition true
function findfunction(value) {
    return value > 18
}

let newarray = Array.from("Kushal") //return a array ['K', 'u', 's', 'h', 'a', 'l']
console.log(newarray);

