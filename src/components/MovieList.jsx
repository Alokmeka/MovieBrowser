import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, fetchMoreMovies }) => {
  const observer = useRef();

  const lastMovieRef = (node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchMoreMovies();
      }
    });
    if (node) observer.current.observe(node);
  };
  console.log(movies, "movieList");
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          ref={movies.length === index + 1 ? lastMovieRef : null}
        />
      ))}
    </div>
  );
};

export default MovieList;
