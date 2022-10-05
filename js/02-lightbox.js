import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const gallery_item = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}">
     <img class="gallery__image" src="${item.preview}" alt="${item.description} " />
   </a>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", gallery_item);

let instance = new SimpleLightbox(".gallery a");
instance.on("show.simplelightbox", function () {
  instance.defaultOptions.captions = true;
  instance.defaultOptions.captionsData = "alt";
  instance.defaultOptions.captionPosition = "bottom";
  instance.defaultOptions.captionDelay = 250;
});

// function linkStandardAction(event) {
//   event.preventDefault();
// }
