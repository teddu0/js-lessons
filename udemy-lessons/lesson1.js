// Hello world
console.log("Hello world!");

//Variables
var firstName = "Konstantin";
let secondName = "Volkov";
console.log(firstName + " " + secondName);

let name, age, dateBirth;
name = "Konstantin";
age = 5;
dateBirth = "23.06.1992";
console.log(
  `My name is ${name},
  i'm ${age} years old,
  my datebirth is ${dateBirth}`
);

//constants
const occupation = "Engineer";
console.log(occupation);

// date types

let middleName = "Sergeevich"; //string
let ageOfBrother = 26; //number
let isHeMarried = false; //boolean
let dataOfMerriage = null; //null
let carNumbers = undefined; //undefined

let person = {
  middleName,
  ageOfBrother,
  isHeMarried,
  dataOfMerriage,
  carNumbers,
};

console.log(person);
