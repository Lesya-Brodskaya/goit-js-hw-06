const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const allElement = [];
for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  allElement.push(li);
}
//console.log(allElement);
list.append(...allElement);
