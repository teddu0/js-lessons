// Functions

// Declarative function

function printOne() {
  console.log("One");
}

// Anonymous function (отличается от декларативной функции тем, анонимну фунцию нельзя вызвать выше ее объявления)

let printTwo = function () {
  console.log("Two");
};

//Arrow function

let printThree = () => {
  console.log("Three");
};

printOne();
printTwo();
printThree();

// Functions with argument and return

function printMultiplyNumber(number) {
  const result = number * 2;
  return result;
}

const result = printMultiplyNumber(10);
console.log(result);

// Import function

import { printAge } from "./helper/printAge.js";

// Import everything

import * as helper from "./helper/printAge.js";

const age = printAge(5);

helper.printAge(10);
