const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");

// const allEl = [];
// for (const ingredient of ingredients) {
//    const li = document.createElement("li");
//    li.textContent = ingredient;
//    li.classList.add("item");
//    allEl.push(li);
//    listEl.append(...allEl);
// }

const allEl = ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  return li;
});

listEl.append(...allEl);

console.log(allEl);

