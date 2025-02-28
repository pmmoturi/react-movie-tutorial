import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const movies = [
    {
      id: 1,
      title: "The Godfather",
      release_date: "March 24, 1972",
      poster:
        "https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/films/the-godfather.jpg?itok=4v9Q5v8w",
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      release_date: "September 23, 1994",
      poster:
        "https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/films/the-shawshank-redemption.jpg?itok=4v9Q5v8w",
    },
    {
      id: 3,
      title: "The Dark Knight",
      release_date: "July 18, 2008",
      poster:
        "https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/films/the-dark-knight.jpg?itok=4v9Q5v8w",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    console.log("Search button clicked");
  };

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
