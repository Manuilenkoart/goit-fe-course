"use strict";
import galleryItems from "./gallery-items.js";

const galleryUl = document.querySelector(".gallery");
const htmlString =
  '<li class="gallery__item"><a class="gallery__link" href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"> <img class="gallery__image" src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg" data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"alt="Tulips"/> <span class="gallery__icon"><i class="material-icons">zoom_out_map</i></span></a></li>';

galleryItems.forEach(function(el) {
  galleryUl.insertAdjacentHTML("beforeend", htmlString);
});

const galleryImage = document.querySelectorAll(".gallery__image");
const galleryLink = document.querySelectorAll(".gallery__link");

const previewLink = galleryItems.map(el => el.preview);
const imgAlt = galleryItems.map(el => el.description);
const imgOriginal = galleryItems.map(el => el.original);

galleryImage.forEach(function(el, idx) {
  setSrc(el, idx, previewLink, imgAlt, imgOriginal);
});
galleryLink.forEach(function(el, idx) {
  setHref(el, idx, imgOriginal);
});
function setSrc(img, idx, link, alt, dataset) {
  img.src = link[idx];
  img.alt = alt[idx];
  img.dataset.source = dataset[idx];
}
function setHref(el, idx, href) {
  el.href = href[idx];
}

const closeModal = document.querySelector("button[data-action='close-modal']");
const jsBackdrop = document.querySelector(".js-backdrop");
const content = document.querySelector(".content");
const contentImg = content.lastElementChild;

galleryUl.addEventListener("click", handleOpenModal);
closeModal.addEventListener("click", handleCloseModal);
jsBackdrop.addEventListener("click", handleCloseModal);

function handleOpenModal(e) {
  e.preventDefault();
  const overlay = document.querySelector(".overlay");
  overlay.classList.add("is-visible");

  contentImg.src = e.target.dataset.source;
  contentImg.alt = e.target.alt;
  window.addEventListener("keydown", handleKeyPress);
}
function handleCloseModal(e) {
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("is-visible");
  window.removeEventListener("keydown", handleKeyPress);
  // if (contentImg === e.target) {
  //   return;
  // }
}
function handleKeyPress(e) {
  if (event.code !== "Escape") {
    return;
  }
  handleCloseModal();
}
