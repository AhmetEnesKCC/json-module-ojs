/// <reference path="./constants.js" />
/// <reference path="./helpers.js" />

import { getData } from "./helpers.js";
import { base_url, posts_url } from "./constants.js";

const posts_wrapper = document.getElementById("posts");

// HTML Components

const PostCard = ({ title, body, id }) => `
<div class="col-4">
<div class="card">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p>${body}</p>
        <a href="/post/?id=2"   class="btn btn-primary">Posta git</a>
      </div>
    </div>
  </div>
`;

export const getPosts = () =>
  getData({ base_url: base_url, path: posts_url }).then((posts) => {
    posts.forEach((post) => {
      posts_wrapper.innerHTML += PostCard({
        title: post.title,
        body: post.body,
        id: post.id,
      });
    });
  });
