// JSON
const jsonString = '{"result": true, "count":42}';
console.log(jsonString.result);
console.log(jsonString.count);
const object = JSON.parse(jsonString);
console.log(object.result);
console.log(object.count);
object.timestamp = "10:00am";
console.log(object);

const invalidJson = '{"result": true, "count":}';
try {
  const newObject = JSON.parse(invalidJson);
} catch (error) {
  console.log(error);
}

console.log(JSON.stringify(object));

const newString = JSON.stringify(object);
console.log(typeof newString);

console.log(JSON.stringify(NaN));
