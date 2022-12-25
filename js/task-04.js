let counterValue = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", onClickDecrementBtn);
incrementBtn.addEventListener("click", onClickIncrementBtn);

function onClickDecrementBtn() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onClickIncrementBtn() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
