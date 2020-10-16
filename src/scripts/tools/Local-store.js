export default {
  get(key) {
    let data = localStorage.getItem(key) || null;

    if (data) data = JSON.parse(data);

    return data;
  },
  set(key, value) {
    let data = JSON.stringify(value);

    localStorage.setItem(key, data);
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};
