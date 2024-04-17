// Logical 'AND'

// console.log(true && false);

//Logical 'OR'

// console.log(true || false);

let ageIsMoreThanEighteen = true;
let isUSCitizen = false;

let canGetDriverLicense = ageIsMoreThanEighteen && isUSCitizen;
console.log("This user can get license: " + canGetDriverLicense);

// Logical 'NOT'

console.log(10 !== "10"); // is true не равны по тому, что разные типы данных

console.log(10 != "10"); // is false равны по тому, что только сравнили значения
