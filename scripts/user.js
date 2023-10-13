/// <reference path="./constants.js" />
/// <reference path="./helpers.js" />

import { base_url, users_url, todos_url, albums_url } from "./constants.js";
import { getData } from "./helpers.js";

const url_params = new URLSearchParams(window.location.search);
const id = url_params.get("id");

const getAlbums = () =>
  getData({
    base_url: base_url,
    path: users_url + "/" + id + "/" + albums_url,
  });

const getTodos = () =>
  getData({
    base_url: base_url,
    path: users_url + "/" + id + "/" + todos_url,
  });

const albums_wrapper = document.getElementById("albums");
const todos_wrapper = document.getElementById("todos");

// HTML Components

const AlbumComponent = ({ album_title, id }) => `

<a href="album/?id=${id}" >
<div class="p-2 text-primary">
  ${album_title}
</div>
</a>


`;

const TodoComponent = ({ isCompleted, todo_title, index }) =>
  `<div class="border-dark p-2">
    <h5>${todo_title}</h5>
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="FlexCheck-${index}"  ${
    isCompleted ? "checked" : ""
  } >
    <label class="form-check-label" for="flexCheckDefault">
        Default checkbox
    </label>
    </div>
</div>`;

// Functions

export const getDataParallel = async () => {
  const albums = await getAlbums();
  document.getElementById("album_spinner").remove();
  const todos = await getTodos();
  document.getElementById("todos_spinner").remove();

  albums.forEach((album) => {
    albums_wrapper.innerHTML += AlbumComponent({
      album_title: album.title,
      id: album.id,
    });
  });
  todos.forEach((todo, index) => {
    todos_wrapper.innerHTML += TodoComponent({
      todo_title: todo.title,
      isCompleted: todo.completed,
      index: index,
    });
  });
};
