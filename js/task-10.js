function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("[type=number]");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divEl = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);

function createBoxes(amount) {}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {}
