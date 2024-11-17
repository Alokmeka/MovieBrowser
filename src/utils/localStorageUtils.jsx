export const saveToFavorites = (movie) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  localStorage.setItem("favorites", JSON.stringify([...favorites, movie]));
};

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};
