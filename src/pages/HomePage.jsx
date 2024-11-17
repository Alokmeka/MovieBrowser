import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import FilterPanel from "../components/FilterPanel";
import useFetchMovies from "../hooks/useFetchMovies";
import "./HomePage.css";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ genre: "", year: "" });
  const { movies, fetchMoreMovies } = useFetchMovies(searchQuery, filters);

  const filteredMovies = movies.filter((movie) => {
    const matchesGenre = filters.genre ? movie.Type === filters.genre : true;
    const matchesYear = filters.year ? movie.Year.includes(filters.year) : true;
    return matchesGenre && matchesYear;
  });

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="homepage">
      <SearchBar setSearchQuery={handleSearchChange} />
      <div className="filter-panel">
        <FilterPanel filters={filters} setFilters={handleFilterChange} />
      </div>
      <div className="movie-list">
        <MovieList movies={filteredMovies} fetchMoreMovies={fetchMoreMovies} />
      </div>
    </div>
  );
};

export default HomePage;
