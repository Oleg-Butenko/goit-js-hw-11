import getImagesByQuery from "./js/pixabay-api"
import { clearGallery, showLoader, createGallery, hideLoader } from "./js/render-functions"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();   
    clearGallery();
    showLoader();
    const [input] = event.target.elements;
    if (!input.value.trim()) {
        iziToast.show({
                message: "Please enter a valid search query",
                 messageColor: 'white',
                backgroundColor: 'red',
                maxWidth: "432px",
                close: true,
            position: "topRight",
        }
        )
        hideLoader();
        form.reset();
         return
    }
    getImagesByQuery(input.value).then(res => {
        if (res.data.hits.length === 0) {
            iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!",
                 messageColor: 'white',
                backgroundColor: 'red',
                maxWidth: "432px",
                close: true,
                position: "topRight",
})
        } else {
            createGallery(res.data.hits);      
        }
        hideLoader();
    }
    )
    form.reset();
}