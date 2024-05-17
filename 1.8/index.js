let randomNumber;
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
function replay() {
  randomNumber = generateRandomNumber();
  document.getElementById("inputNumber").value = "";
}
randomNumber = generateRandomNumber();
function handleUserInput() {
  let value = document.getElementById("inputNumber").value;
  if (value != randomNumber) {
    if (value > randomNumber) {
      alert("Number to high");
    } else {
      alert("Number to low");
    }
  } else {
    alert("Correct Number");
  }
}
