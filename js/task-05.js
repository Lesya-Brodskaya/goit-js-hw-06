const refs = {
  inputEl: document.querySelector("#name-input"),
  outputEl: document.querySelector("#name-output"),
};

// const inputEl = document.querySelector("#name-input");
// const outputEl = document.querySelector("#name-output");

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.outputEl.textContent = event.currentTarget.value;

  if (refs.outputEl.textContent === "") {
    console.log((refs.outputEl.textContent = "Anonymous"));
  }
}
