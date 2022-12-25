const list = document.querySelectorAll("li.item");
console.log(`Number of categories: ${list.length}`);
for (let i = 0; i < list.length; i += 1) {
  console.log(`Category: ${list[i].querySelector("h2").textContent}`);
  console.log(`Elements: ${list[i].querySelectorAll("li").length}`);
}
