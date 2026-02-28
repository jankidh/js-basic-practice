class People {
  constructor(name) {
    this.name = name;
  }
  breath() {
    console.log(`${this.name} can breath`);
  }
}
class HealthyPeople extends People {
  constructor(name, place) {
    super(name);
    this.place = place ?? "park";
  }
  run() {
    console.log(`${this.name} can run in ${this.place}`);
  }
}
class Athlete extends HealthyPeople {
  constructor(name, place) {
    super(name, place);
  }
  quickRun() {
    console.log(`${this.name} can run quickly in ${this.place}`);
  }
}

class Animal {
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }
  walk() {
    console.log(`${this.name} can walk with speed ${this.speed}`);
  }

  stop() {
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  constructor(name, speed, place) {
    super(name, speed);
    this.place = place;
  }
  hide() {
    console.log(`${this.name} hides!`);
  }
  stop() {
    super.stop();
    console.log(`${this.name} stops in the ${this.place}`);
  }
}

export { People, HealthyPeople, Athlete, Animal, Rabbit };
