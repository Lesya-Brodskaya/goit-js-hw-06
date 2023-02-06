const itemEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemEl.length}`);

// for (let i = 0; i < itemEl.length; i += 1) {
//   console.log(`Category: ${itemEl[i].querySelector("h2").textContent}`);
//   console.log(`Elements: ${itemEl[i].querySelectorAll("li").length}`);
// }

itemEl.forEach((el) => {
  const category = el.querySelector("h2");
  const elements = el.querySelectorAll("li");
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
