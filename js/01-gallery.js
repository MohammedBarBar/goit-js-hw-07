import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";

// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const gallery_item = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </div>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", gallery_item);

gallery.addEventListener("click", selectImage);

// Escape

// gallery.append(...gallery_item);

function selectImage(event) {
  linkStandardAction(event);
  if (event.target.nodeName !== "IMG") return;
  // gallery.classList.add("active");
  const instance = basicLightbox.create(
    `
      <img class="lightBoxImg" src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
  const item = document.querySelector(".basicLightbox");

  // item.addEventListener("click", (e) => {
  // if (e.target !== e.currentTarget) console.log(e);
  // return;
  // });

  gallery.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}

function linkStandardAction(event) {
  event.preventDefault();
}
