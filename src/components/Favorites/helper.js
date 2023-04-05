export const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("favorites"));
};

export const existsInLocalStorage = (item) => {
  const favorites = getFromLocalStorage() || [];
  const index = favorites.indexOf(item);

  return index !== -1;
};

export const saveToLocalStorage = (item) => {
  const favorites = getFromLocalStorage() || [];

  if (!existsInLocalStorage(item)) {
    favorites.push(item);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const removeFromLocalStorage = (item) => {
  let favorites = getFromLocalStorage();
  const index = favorites.indexOf(item);

  if (index !== -1) {
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};
