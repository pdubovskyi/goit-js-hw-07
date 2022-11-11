import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// -----------------1------------------
const items = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</div>`;
  })
  .join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("beforeend", items);

// ---------------------2-----------------

let gallery = new SimpleLightbox("ul.gallery a", {
  captionsData: "alt",
  captionDelay: "250ms",
});
