let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrement.addEventListener("click", callback1);

function callback1() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

increment.addEventListener("click", callback2);

function callback2() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}