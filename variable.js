// Var

var a = 10;
function test() {
  var b = 20;
}
console.log(a);

var pop = "hi js";
function rel() {
  var top = "Hello Js";
  console.log(top);
}
rel();
console.log(pop); //.............................pop is globally defined variable
// console.log(top); //..........................this is giving error because top is not global defined variable it is functionally defined variable

var browser = "chrome";
var browser = "firefox";
browser = "edge";
console.log(browser); //.........................redeclaration and reintialization both are allowed with var keyword.

var g;
console.log(g); //undefined
g = "Hello World";
console.log(g);

// let - block scoped
let m = "Hey Janki";
let time = 4;
if (time > 3) {
  let msg = "How are you?";
  console.log(msg);
}
// console.log(msg); //...........................let is blocked scoped so can not be used outside the perticular block
console.log(m);

// const
const mg = "Hey naveen";
// mg = "Hey Tom";  //............................you can not reassign value to const like let and var
console.log(mg);

const days = 7;
console.log(100 * days);

var p;
console.log(p);

let q;
console.log(q);

const o = 100; //.................................Const declaration must be initialized.
console.log(o);
