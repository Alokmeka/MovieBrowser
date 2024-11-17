import React from "react";
import "./SearchBar.css";

const SearchBar = ({ setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search movies..."
      onChange={handleInputChange}
      className="search-bar"
    />
  );
};

export default SearchBar;
