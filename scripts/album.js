/// <reference path="constants.js" />
/// <reference path="helpers.js" />

import { base_url } from "./constants.js";
import { getData } from "./helpers.js";

const url_params = new URLSearchParams(window.location.search);
const id = url_params.get("id");

// HTML Element

const photo_wrapper = document.getElementById("photos");

// HTML Component

const PhotoCard = ({ img_url, title }) => `
<div class="col-6">

<div class="d-flex border border-secondary-subtle p-2 flex-column">
    <p>${title}</p>
    <img src="${img_url}" alt="album photo" class="img-fluid" />
</div>

</div>
`;

export const getAlbum = () =>
  getData({
    base_url: base_url,
    path: "albums/" + id + "/photos",
  }).then((photos) => {
    photos.forEach((photo) => {
      photo_wrapper.innerHTML += PhotoCard({
        title: photo.title,
        img_url: photo.url,
      });
    });
  });
