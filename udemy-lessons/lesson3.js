// objects

let person = {
  firstName: "Ivan",
  lastName: "Ivanov",
  cars: ["Vaz", "Uaz", "SAZ"],
};
console.log(person);

console.log(person.firstName);

//dot notation
person.lastName = "Petrov";

// braket notation
person["firstName"] = "Maxim";
console.log(`${person.firstName} ${person.lastName}`);

//arrays

let cars = ["Toyota", "Mercedes", "BMW"];
console.log(cars[1]);

person.cars[0] = "Fiat";
console.log(person.cars);
