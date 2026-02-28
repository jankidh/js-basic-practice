// Switch Debug

console.log("----- SWITCH DEBUG -----");
let a = 2 + 2;
switch (a) {
  case (a = 3):
    console.log("Too small");
    break;
  case (a = 4):
    console.log("Exactly!");
    break;
  case (a = 5):
    console.log("Too big");
    break;
  default:
    console.log("I don't know such values");
}

// If Else
console.log("----- IF ELSE DEBUG -----");
let age = 101;
if (age < 3) {
  console.log("Hi, baby!");
} else if (age < 18) {
  console.log("Hello");
} else if (age < 100) {
  console.log("Greetings!");
} else {
  console.log("What an unusual age!");
}
