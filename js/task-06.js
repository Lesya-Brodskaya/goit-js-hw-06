const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  inputEl.classList.remove("valid", "invalid");
  if (
    event.currentTarget.value.length ===
    Number(inputEl.getAttribute("data-length"))
  ) {
    inputEl.classList.add("change", "valid");
  } else {
    inputEl.classList.add("change","invalid");
  }
}
