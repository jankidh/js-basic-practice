import {
  People,
  HealthyPeople,
  Athlete,
  Animal,
  Rabbit,
} from "./classInheritance.js";

describe("Class Inheritance", () => {
  it.skip("Class inheritance", async () => {
    const name = "Janki";
    const place = "oxhey park";
    const person = new People(name);
    const runner = new HealthyPeople(name, place);
    const olympicRunner = new Athlete(name, place);
    console.log("what People class can do?");
    person.breath();

    console.log("what HelthyPeople class can do?");
    runner.breath();
    runner.run();

    console.log("what Athlete class can do?");
    olympicRunner.breath();
    olympicRunner.run();
    olympicRunner.quickRun();
  });

  it.skip("Class inheritance", async () => {
    const name = "Olga";
    const place = "woods";
    const person = new People(name);
    const runner = new HealthyPeople(name, place);
    const olympicRunner = new Athlete(name);
    console.log("what People class can do?");
    person.breath();

    console.log("what HelthyPeople class can do?");
    runner.breath();
    runner.run();

    console.log("what Athlete class can do?");
    olympicRunner.breath();
    olympicRunner.run();
    olympicRunner.quickRun();
  });
});

it("Class Rabbit Inheritance", async () => {
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
});
