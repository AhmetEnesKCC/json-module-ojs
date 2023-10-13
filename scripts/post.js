/// <reference path="./constants.js" />
/// <reference path="./helpers.js" />

import { getData } from "./helpers.js";
import { base_url, comments_url, posts_url } from "./constants.js";

const url_params = new URLSearchParams(window.location.search);
const id = url_params.get("id");

// HTML Element

const comments_wrapper = document.getElementById("comments");

// HTML Component

const CommentCard = ({ name, email, body }) => `

<div class="col-12 border border-secondary-subtle">
    <div class="d-flex flex-column">
            <h6>${name}</h6>
            <a href="mailto:${email}">${email}</a>
            <p>${body}</p>
    </div>
</div>

`;

export const getPost = () =>
  getData({
    base_url: base_url,
    path: posts_url + "/" + id + "/" + comments_url,
  }).then((comments) => {
    comments.forEach((comment) => {
      comments_wrapper.innerHTML += CommentCard({
        body: comment.body,
        email: comment.email,
        name: comment.name,
      });
    });
  });
