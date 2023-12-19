/**
 * Работа с базовыми арифметическими операторами
 *
 */

let width = 10;
let height = 5;
let space = width * height;
console.log(space);

let newWidth = space - width;

console.log(newWidth);

//Возведение в степень
let volume3 = 2 ** 3; // 2*2*2
let volume2 = 2 ** 2; // 2*2
console.log(volume3, volume2);

//Конкатенация
let city = "Astana";
let street = "Abiken Bekrurov";
let homeNumber = "4";

let address = city + ", " + street + ", " + homeNumber;
console.log(address);

address = { c: city, s: street, hN: homeNumber };
console.log(address);
