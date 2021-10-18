// JS Objects contains properties and methods(functions)

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullname: function () {
    return person.firstName + " " + person.lastName;
  }, // We could also use this.firstname this keyword instead of person
};

//To acces a single property
console.log(person.age);

person.age = 65; //To change the value in property

console.log(person.age);

console.log(person.fullname());  //Accessing Methods

