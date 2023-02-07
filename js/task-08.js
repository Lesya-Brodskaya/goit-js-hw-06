const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  if (formElements.email.value.trim() === "" || formElements.password.value === "") {
    alert("Не всі поля заповнені");
  } else {
    const formData = Object.fromEntries(new FormData(event.currentTarget));

    console.log(formData);
    event.target.reset();
   }
}
