import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
import {createGallery, hideLoader} from "./render-functions";
export default getImagesByQuery;

const API_KEY = "51380879-d62d23ff75e6f86b6b9ab3020";
const gallery = document.querySelector(".gallery")

function getImagesByQuery(query) {
    axios.get('https://pixabay.com/api/', {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    }).then(res => {
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
}