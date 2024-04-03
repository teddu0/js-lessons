// Concatenation and interpolation

let price = 50;
let item = "table";

let sentence = "The price of " + item + " is " + price + " dollars!"; //concatenation
let sentence2 = `The price of ${item} is ${price} dollars!`; //interpolation
console.log(sentence);
console.log(sentence2);
