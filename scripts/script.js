import { getData } from "./helpers.js";
import * as constants from "./constants.js";
import { getUsers } from "./users.js";
import { getDataParallel as getUser } from "./user.js";
import { getAlbum as getAlbums } from "./album.js";
import { getPosts } from "./posts.js";
import { getPost } from "./post.js";
import { navbarComponent } from "./navbar.js";

const pathname = window.location.pathname;
const bare_path = pathname.replace(/\//, "");
const goBackScript = document.createElement("script");

goBackScript.innerHTML = `function goBack() { history.back()}`;

const isBackMyPage = document.referrer.split(/\//)[2] === window.location.host;

const showBack = isBackMyPage && bare_path !== "index/";

document.body.appendChild(goBackScript);

document.body.insertAdjacentHTML(
  "afterbegin",
  navbarComponent(bare_path, showBack)
);

if (bare_path === "users/") {
  getUsers();
}

if (bare_path === "user/") {
  getUser();
}

if (bare_path === "user/album/") {
  getAlbums();
}

if (bare_path === "posts/") {
  getPosts();
}

if (bare_path === "post/") {
  getPost();
}
