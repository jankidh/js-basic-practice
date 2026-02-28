describe("Finding value", () => {
  const persons = [
    { personId: 1, personName: "Janki", personNationality: "Indian" },
    { personId: 2, personName: "Olga", personNationality: "Belarusian" },
  ];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const num = [10, 1, 5];

  it.only("Find", () => {
    let results = persons.find((person) => person.personId === 2);
    console.log(results);

    results = numbers.find((number) => number === 5);
    console.log(results);

    results = numbers.find((number) => number > 5);
    console.log(results);
  });

  it("Filter", () => {
    let results = persons.filter((person) => person.personId === 2);
    console.log(results);

    results = numbers.filter((number) => number === 5);
    console.log(results);
  });

  it("Map", () => {
    let results = numbers.map((number) => number + 1);
    console.log(results);

    results = persons.map((person) => person.personName);
    console.log(results);
  });

  it("Sort", () => {
    let results = num.sort((a, b) => a - b);
    // a-b = asc , b-a des
    console.log(results);

    results = num.sort((a, b) => b - a);
    console.log(results);
  });
});
