import React from "react";
import { saveToFavorites } from "../utils/localStorageUtils";
import "./MovieCard.css";

const MovieCard = React.forwardRef(({ movie }, ref) => {
  const handleFavorite = () => {
    saveToFavorites(movie);
    alert(`${movie.Title} has been added to your favorites!`);
  };

  return (
    <div className="movie-card" ref={ref}>
      <div className="movie-poster-container">
        <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
      </div>
      <button onClick={handleFavorite} className="favorite-button">
        Mark as Favorite
      </button>
    </div>
  );
});

export default MovieCard;
