import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <header className="app-header">
        <Link to="/" className="home-link">
          <h1>Movie Browser</h1>
        </Link>
        <div className="button-container">
          <Link to="/" className="favorites-button">
            Home
          </Link>
          <Link to="/favorites" className="favorites-button">
            Your Favorites
          </Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
