export const navbarComponent = (bare_path, showBack) => {
  console.log(breadCrumbComponent(bare_path));
  return `
  <nav class="d-flex justify-content-between px-2 bg-secondary align-items-center">
  ${
    showBack
      ? '<div onclick="goBack()" style="width: 40px; height: 40px; transform: rotateY(180deg)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"><path d="M5 12h13M12 5l7 7-7 7"></path></svg></div>'
      : ""
  }
  
    <div>${breadCrumbComponent(bare_path)}</div>
    <div class="d-flex justify-content-end column-gap-2">
        <a href="/index" class="text-white">Home</a>
        <a href="/users" class="text-white">Kullanicilar</a>
        <a href="/posts" class="text-white">Gonderiler</a>
    </div>
  </nav>
  `;
};

const breadCrumbComponent = (path) => {
  const paths = path.split("/");

  return `
    <div class="d-flex column-gap-2">${paths
      .filter((path) => !!path)
      .map((path) => `<span class="text-white">${path.replace(",", "")}</span>`)
      .join("<span class='text-primary'>/</span>")}</div>
`;
};
