import React from "react";
import "./FilterPanel.css";

const FilterPanel = ({ filters, setFilters }) => {
  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="filter-panel">
      <label className="filter-label">
        Genre:
        <select
          className="filter-select"
          onChange={(e) => handleFilterChange("genre", e.target.value)}
        >
          <option value="">All Genres</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
      </label>
      <label className="filter-label">
        Year:
        <input
          className="filter-input"
          type="number"
          placeholder="Year"
          value={filters.year}
          onChange={(e) => handleFilterChange("year", e.target.value)}
        />
      </label>
    </div>
  );
};

export default FilterPanel;
