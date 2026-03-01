import Calc from "./class.js";

// Class Usage:

const a = 5;
const b = 9;
const calc = new Calc(a, b);

const c = calc.add();
console.log(c);

const d = calc.sub();
console.log(d);

const e = calc.mul();
console.log(e);

const f = calc.div();
console.log(f);

const g = calc.remainder();
console.log(g);

const h = calc.floorDiv();
console.log(h);
