const numberOne = document.getElementById("number-1");
const numberTwo = document.getElementById("number-2");
const form = document.querySelector("form");
const error = document.querySelector(".reponse-number");
const right = document.querySelector(".right-respons");
const wrong = document.querySelector(".rowng-respons");
const reset = document.querySelector(".reset");
const answerInput = document.getElementById("response");

let total = "";

function addClassList(element, classes) {
  return element.classList.add(classes);
}
function removeClassList(element, classes) {
  return element.classList.remove(classes);
}
function getRandomNumber(value, value2) {
  const n = (value.textContent = Math.floor(Math.random() * 10));
  const nn = (value2.textContent = Math.floor(Math.random() * 10));
  return (total = n + nn);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formulaire = e.currentTarget;
  const data = new FormData(formulaire);
  const input = data.get("input");
  console.log(input);

  if (input.length <= 0) {
    e.preventDefault();
    error.classList.add("show");
  }

  if (input == total) {
    addClassList(right, "show");
    addClassList(reset, "show");
  } else {
    addClassList(wrong, "show");
    addClassList(reset, "show");
  }
});

reset.addEventListener("click", () => {
  getRandomNumber(numberOne, numberTwo);
  removeClassList(right, "show");
  removeClassList(reset, "show");
  removeClassList(wrong, "show");
  removeClassList(error, "show");
  answerInput.value = "";
});

getRandomNumber(numberOne, numberTwo);
