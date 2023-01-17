export const get = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
};

export const destroy = (key) => {
  localStorage.removeItem(key);
};

export const destroyAll = () => {
  localStorage.clear();
};
