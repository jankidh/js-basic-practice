// Finding Values

const persons = [
  { personId: 1, personName: "Janki", personNationality: "Indian" },
  { personId: 2, personName: "Olga", personNationality: "Belarusian" },
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = [10, 1, 5];

// find()
console.log("----- FIND -----");
let results = persons.find((person) => person.personId === 2);
console.log(results);

results = numbers.find((number) => number === 5);
console.log(results);

results = numbers.find((number) => number > 5);
console.log(results);

// Filter()
console.log("----- FILTER -----");
results = persons.filter((person) => person.personId === 2);
console.log(results);

results = numbers.filter((number) => number === 5);
console.log(results);

// Map()
console.log("----- MAP -----");
results = numbers.map((number) => number + 1);
console.log(results);

results = persons.map((person) => person.personName);
console.log(results);

// Sort()
console.log("----- SORT -----");
let resultsAsc = num.sort((a, b) => a - b); // a-b = ascending
console.log(resultsAsc);

let resultsDesc = num.sort((a, b) => b - a); // b-a = descending
console.log(resultsDesc);
