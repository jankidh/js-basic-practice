// 1. push:
let lang = ["JAVA", "Python", "JS"];
lang.push("Ruby", "HTML");
console.log(lang);

//2. pop:
let number = [1, 2, 3, 4, 5];
number.pop();
console.log(number);

// 3. shift:
let fruits = ["Apple", "Banana", "Orange"];
let firstFruits = fruits.shift();
console.log(firstFruits);
console.log(fruits);

//4. unshift:
let colors = ["Red", "Blue", "Green", "Purple"];
console.log(colors.length);
colors.unshift("Black", "White");
console.log(colors);
console.log(colors.length);

// 5. Splice:
let animals = ["Dog", "Cat", "Horse", "Cow"];
animals.splice(1, 2, "Bear", "Elephant");
console.log(animals);

// 6. Slice
let pop = [1, 2, 3, 4, 5];
let newPop = pop.slice(1, 4);
console.log(newPop);

// 7. concat:
let app = ["Apple", "Banana", "Orange"];
let num = [1, 2, 3, 4];
let mixedArray = app.concat(num);
console.log(mixedArray);

// 8.indexOf:
let color = ["Red", "Blue", "Green", "Red"];
let indexRed = color.indexOf("Red");
console.log(indexRed);
let PurpleIndex = color.indexOf("Purple");
console.log(PurpleIndex);

// 2nd Red index
// let redSecondIndex = color.indexOf("Red", 1);
let redSecondIndex = color.indexOf("Red", color.indexOf("Red") + 1);
console.log(redSecondIndex);

// 9. includes:

// 10. forEach
