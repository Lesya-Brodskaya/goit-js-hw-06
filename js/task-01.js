const itemEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((el) => {
  const category = el.querySelector("h2");
  const elements = el.querySelectorAll("li");
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
