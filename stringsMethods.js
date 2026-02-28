describe("Stings Methods", () => {
  const str1 = "FirstType";
  const str2 = 'secondType"';
  const str3 = `thirdType ${str1}`;
  it.skip("String Methods", () => {
    const textLength = str1.length;
    console.log(textLength);

    //slice()
    let slicedString = str3.slice(0, 6);
    console.log(slicedString);

    slicedString = str3.slice(0, str3.length - 2);
    console.log(slicedString);

    slicedString = str3.slice(6, str3.length - 2);
    console.log(slicedString);

    //substring()
    let subString = str3.substring(0, 6);
    console.log(subString);

    subString = str3.substring(0, str3.length - 2);
    console.log(subString);

    subString = str3.substring(6, str3.length - 2);
    console.log(subString);
  });

  it.only("stringMethods", () => {
    // index of stringObject [0]
    console.log("indexOf");
    let string = "Apple";
    console.log(string.indexOf("l"));

    // charAt(0)
    console.log("charAt");
    console.log(string.charAt(0));

    //charCodeAt()
    console.log("charCodeAt"); // a - z : 97 - 122
    console.log(string.charCodeAt(2));

    // toUpperCase()
    console.log("toUpperCase");
    console.log(string.toUpperCase());

    // toLowerCase()
    console.log("toLowerCase");
    console.log(string.toLowerCase());

    // includes(value)
    console.log("includes");
    console.log(string.includes("p"));

    // split(",")
    console.log("split");
    console.log(string.split("l"));

    // join("-")
    console.log("join");
    const symbols = ["a", "b"];
    console.log(symbols.join("k"));

    // trim()
    console.log("trim");
    let color = " Purple ";
    let trimResult = color.trim();
    console.log(trimResult, trimResult.length);

    trimResult = color.trimStart();
    console.log(trimResult, trimResult.length);
    trimResult = color.trimEnd();
    console.log(trimResult, trimResult.length);

    // replace(val1 , val2)
    console.log("replace");
    console.log(string.replace("A", "l"));

    // repeat(number)
    console.log("repeat");
    console.log(string.repeat(2));

    const stringWithSingleQuotes = `He said, \'Hello!\'`;
    const stringWithDoubleQuotes = `She said, \"Hi!\"`;

    const unicodeString = "Hello, \u{1F60A}"; // Using Unicode escape sequence
    console.log(unicodeString); // Output: Hello, 😊
    const unicodeString2 = "Hello,\n \u{1F60A}";
    console.log(unicodeString2);
  });
});
