const getData = async ({ base_url, path }) => {
  const res = await fetch(base_url + path);
  const data = await res.json();
  return data;
};

export { getData };
