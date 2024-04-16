// Loops

// For i loop

for (let i = 0; i <= 5; i++) {
  console.log("Hello " + i);
}

// For of loop

const cars = ["Toyota", "Fiat", "Renauld", "BMW"];

for (let car of cars) {
  console.log(car);
  if (car == "Fiat") {
    break;
  }
}

// ES6 syntax for each loop

cars.forEach((car) => {
  console.log(car);
});
