describe("looping debug", () => {
  it("For loop", () => {
    // 1to 10
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  });

  it("For... of loop", () => {
    const array = [1, 2, 3, 4, 5];

    for (const item of array) {
      console.log(item);
    }
    console.log("--------");

    for (const [index, item] of array.entries()) {
      console.log(index, item);
    }

    console.log("--------");

    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }

    console.log("--------");

    for (let i = 0; i < array.length; i++) {
      console.log(i, array[i]);
    }
  });

  it("while loop", () => {
    let i = 1;
    while (i <= 10) {
      console.log(i);
      i++;
    }
    console.log("--------");

    let p = 2;
    while (p <= 10) {
      console.log(p);
      p = p + 2;
    }
    console.log("--------");
  });

  it("Do While loop", () => {
    let h = 1;
    do {
      console.log(h);
      h++;
    } while (h <= 10);
  });

  //break
  // 1to 100 : print HI when you see multiplication of 5 without break
  it.only("break debugging", () => {
    let num = 1;
    /*  while (num <= 100) {
      console.log(num);
      if (num % 5 === 0) {
        console.log("Hi");
      }
      num++;
    }  */

    // 1to 100 : print HI___Bye when you see multiplication of 5 with break
    while (num <= 100) {
      console.log(num);
      if (num % 5 === 0) {
        console.log("Hi----Bye");
        break;
      }
      num++;
    }
  });
});

it("for....in loop for object", () => {
  const user = { name: "Joe", Age: 40, City: "London" };
  for (const key in user) {
    console.log(key + ":" + user[key]);
  }
});

// you are given number n. for every integer i from 1 to n, print :
// 1. FizzBuzz if i is divisible by bith 3 and 5
// 2. Fizz if i is divisible by 3 only
// 3. Buzz if i is divisible by 5 only
// 4. otherwise print i

it.only("For loop", () => {
  // 1to n

  const n = 15;
  for (let i = 1; i <= n; i++) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
});
