// for of lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:



//On array

const cars = ["BMW", "Audi", "Tata", "Toyota"]

for (let x of cars) {      // X is item value 
    console.log(x);
    if(x=="Audi"){
        break;
    }
}

// On string

let myName = "Kushal";
for (let x of myName) {
    console.log(x);
}

