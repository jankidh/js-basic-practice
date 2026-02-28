// Date&time
// TimeOut
// maths
describe("", () => {
  it(" Date&time", () => {
    // console.log(new Date());
    const date = new Date();

    console.log(date.toString());
    console.log(date.toISOString());
    console.log(date.toUTCString());
    console.log(date.toLocaleString()); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

    console.log(Date.now());
    console.log(date.getTime());

    console.log(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

    console.log(date.getFullYear()); // year
    console.log(date.getMonth()); //month (0-11)
    console.log(date.getDate()); // day of month
    console.log(date.getDay()); // day of week (0-Sunday)
    console.log(date.getHours()); // hour
    console.log(date.getMinutes()); // min
    console.log(date.getSeconds());

    console.log("UTC Year:", date.getUTCFullYear());
    console.log("UTC Month (0-11):", date.getUTCMonth());
    console.log("UTC Day of Month:", date.getUTCDate());
    console.log("UTC Day of Week (0-Sunday):", date.getUTCDay());
    console.log("UTC Hours:", date.getUTCHours());
    console.log("UTC Minutes:", date.getUTCMinutes());
    console.log("UTC Seconds:", date.getUTCSeconds());
    console.log("UTC Milliseconds:", date.getUTCMilliseconds());
  });
  it("Timeout", async () => {
    const fun = (param) => {
      console.log(param);
    };
    const timeout = 10 * 1000;

    fun(new Date());

    // setTimeout(fun(new Date()), delay);
    // await new Promise((resolve) =>
    //   setTimeout(async () => {
    //     fun(new Date());
    //     resolve();
    //   }, timeout),
    // );
    //await new Promise((resolve) => setTimeout(fun(new Date()), delay));
    const delay = async (milliseconds) => {
      await new Promise((resolve) =>
        setTimeout(async () => {
          resolve();
        }, milliseconds),
      );
    };
    await delay(5000); // General delay implementation in async without launching the browser session; await browser.pause(ms) - wdio delay in browser
    fun(new Date());
  });

  it("Math", () => {
    console.log(Math.random());

    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    console.log(random(10, 1000));

    let x = 10;
    let y = 5;
    console.log(Math.pow(x, y)); //x^y

    console.log(Math.sqrt(x));
    x = 5.6;
    console.log(Math.abs(x)); //Absolute value of a number
    console.log(Math.sign(x));
    console.log(Math.ceil(x)); //Rounds a number up to the nearest integer
    console.log(Math.floor(x)); //Rounds a number down to the nearest integer
    console.log(Math.round(x)); //Rounds a number to the nearest integer

    console.log(Math.trunc(x));
  });

  it.only("parceInt", () => {
    console.log(parseInt("123")); //removes decimal part
    console.log(parseInt("15x"));
    console.log(parseInt("13.9"));
    console.log(parseInt("word"));
    console.log(parseFloat("123")); // keeps it
    console.log(parseFloat("15x"));
    console.log(parseFloat("13.9"));
    console.log(parseFloat("word"));
    console.log(Number("123"));
    console.log(Number("15px"));
    console.log(Number("13.9"));
    console.log(Number("word"));

    console.log(isNaN(123));
    console.log(isNaN("word"));
  });
});
