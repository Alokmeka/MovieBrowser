import React from "react";
import { getFavorites } from "../utils/localStorageUtils";

const FavoritesList = () => {
  const favorites = getFavorites();

  return (
    <div className="favorites-list">
      {favorites.length === 0 ? (
        <p className="no-favorites">No favorite movies yet!</p>
      ) : (
        favorites.map((movie) => (
          <div key={movie.id} className="favorite-movie">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="favorite-poster"
            />
            <h3 className="favorite-title">{movie.Title}</h3>
            <p className="favorite-year">{movie.Year}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
