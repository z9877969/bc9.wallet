export const getFromLS = (key, cb) => {
  const data = localStorage.getItem(key);
  data && cb(JSON.parse(data));
};

export const setToLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
