/**
 * Работа с объектами
 */

//person
let person = {};

person.name = "Kostya";
person.age = 31;
person.say = function (name) {
  console.log("Hello, my name is " + name + "!");
};
console.log(person.say(person.name));

//job
let salary = (lvl) => {
  if (lvl === "senior") {
    return 50000;
  } else {
    return 10000;
  }
};

let type = "QA";
let lvl = "junior";
let job = {
  person,
  type,
  lvl: lvl,
  salary: salary("senior"),
  responsibility: function () {
    console.log("searching bugs");
  },
};
delete job.type;
console.log(job);

//animal
function createObject(propName, propValue) {
  var obj = { [propName]: propValue };
  console.log(obj);
}

let animal = createObject("name", "sharik");
