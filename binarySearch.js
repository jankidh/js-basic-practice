describe("Debug Linear and Binary Search", () => {
  it.skip("Linear Search", () => {
    const linearSearch = (target, array) => {
      let result = null;
      for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
          result = array[i];
          break;
        }
      }
      return result;
    };

    const target = 9;
    const array = [5, 6, 7, 8];
    const test = linearSearch(target, array);
    console.log("test: " + test);
  });

  it("Binary Search — obvious stop", () => {
    const binarySearch = (target, array) => {
      let left = 0;
      let right = array.length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        console.log(`CHECK → left=${left}, mid=${mid}, right=${right}`);

        if (array[mid] === target) {
          console.log(`FOUND → value=${array[mid]} at index=${mid}`);
          console.log("STOP SEARCH");
          return array[mid];
        }

        if (array[mid] < target) {
          console.log("→ move RIGHT");
          left = mid + 1;
        } else {
          console.log("→ move LEFT");
          right = mid - 1;
        }
      }

      console.log(" NOT FOUND → STOP SEARCH");
      return null;
    };

    const target = 4;
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = binarySearch(target, array);
    console.log("RESULT:", result);
  });
});
