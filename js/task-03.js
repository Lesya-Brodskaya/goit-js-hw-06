const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryEl = document.querySelector(".gallery");

const createImg = images.map(({ url, alt }) => {
  let stringEl = `<li 
  class = "item"
   style = "display: inline-block; 
   justify-content: space-between;
   padding-left: 20px;
   margin-top: 30px;">
  <img  class = "img" alt="${alt}"; src="${url}"; width = 300"; height = "200";></li>`;
  return stringEl;
});

galleryEl.insertAdjacentHTML("beforeend", `${createImg}`);
