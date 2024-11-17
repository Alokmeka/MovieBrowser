import React from "react";
import FavoritesList from "../components/FavoritesList";
import "./FavoritesPage.css";

const FavoritesPage = () => {
  return (
    <div className="favorites-page">
      <h1>My Favorite Movies</h1>
      <FavoritesList />
    </div>
  );
};

export default FavoritesPage;
