const array = ["apple", "banana", "orange", "grape", "mango"];

const input = document.getElementById("valueInput");
const button = document.getElementById("checkButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  const userValue = input.value.trim().toLowerCase();

  if (!userValue) {
    showMessage("⚠️ Please enter a value.", "warning");
    return;
  }

  const isFound = array.includes(userValue);

  if (isFound) {
    showMessage(`✅ Success! "${userValue}" found in array.`, "success");
  } else {
    showMessage(`⚠️ Warning! "${userValue}" not found in array.`, "warning");
  }
});

function showMessage(text, type) {
  message.textContent = text;
  message.className = type;
}
