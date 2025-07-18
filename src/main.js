import getImagesByQuery from "./js/pixabay-api"
const form = document.querySelector(".form");
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { clearGallery, showLoader,  } from "./js/render-functions"

form.addEventListener("submit", handleSubmit);



function handleSubmit(event) {
    event.preventDefault();
    clearGallery()
    showLoader();
    const [input] = event.target.elements
    getImagesByQuery(input.value);
    form.reset();
}