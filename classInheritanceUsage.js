import {
  People,
  HealthyPeople,
  Athlete,
  Animal,
  Rabbit,
} from "./classInheritance.js";

// First Example
console.log("Example 1");

const name1 = "Janki";
const place1 = "oxhey park";

const person1 = new People(name1);
const runner1 = new HealthyPeople(name1, place1);
const olympicRunner1 = new Athlete(name1, place1);

console.log("What People class can do?");
person1.breath();

console.log("What HealthyPeople class can do?");
runner1.breath();
runner1.run();

console.log("What Athlete class can do?");
olympicRunner1.breath();
olympicRunner1.run();
olympicRunner1.quickRun();

// Second Example

console.log("\n Example 2");

const name2 = "Olga";
const place2 = "woods";
const person2 = new People(name2);
const runner2 = new HealthyPeople(name2, place2);
const olympicRunner2 = new Athlete(name2);
console.log("what People class can do?");
person2.breath();

console.log("what HelthyPeople class can do?");
runner2.breath();
runner2.run();

console.log("what Athlete class can do?");
olympicRunner2.breath();
olympicRunner2.run();
olympicRunner2.quickRun();

//---Rabbit Inheritance---

console.log("\n Rabbit Inheritance");

const name = "Rabbit";
const speed = 10;
const place = "woods";
const animal = new Animal(name, speed);
const rabbit = new Rabbit(name, speed, place);

console.log("what Animal class can do");
animal.walk();
animal.stop();

console.log("What Rabbit class can do");
rabbit.walk();
rabbit.hide();
rabbit.stop();
