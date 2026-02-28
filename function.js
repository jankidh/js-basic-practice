describe("debugging", () => {
  // Simple Function
  function fun1(param) {
    console.log(param);
  }
  fun1("test");
});

// Arrow Function wiht return

const fun2 = (param) => {
  console.log(param);
  return param + 1;
};
const test = fun2(4);
console.log(test);

// Different Types of function:

// 1. Function Declaration:
function add(a, b) {
  return a + b;
}

function print() {
  console.log("My name is Janki");
}
const addition = add(5, 6);
console.log(addition);
print();

// 2. Function Expression: Annonymous function
const multiply = function (x, y) {
  return x * y;
};
const mul = multiply(4, 5);
console.log(mul);

// 3. Arrow Function Expression : Annonymous function
const divide = (a1, a2) => a1 / a2;
const div = divide(20, 5);
console.log(div);

// 4. Function Constructor
const substract = new Function("a", "b", "return a-b");
const subs = substract(20, 2);
console.log(subs);

// 5. IIFE(Immediately Invoked Function Expression)
(function () {
  console.log("Server is up and runnning on port 3000");
})();

//6. Annonymous Function - No Specific name

// const number = [1, 2, 3, 4, 5];
// const squareNumbers = number.map(function (x) {
//   return x * x;
// });
// console.log(squareNumbers);

const number = [1, 2, 3, 4, 5];
const squareNumbers = number.map((x) => {
  return x * x;
});
console.log(squareNumbers);

// 7. Recursive Function 4 => 4*3*2*1 =24

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(4));
console.log(factorial(5));

// 8. Higher Order Function
