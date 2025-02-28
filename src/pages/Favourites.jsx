import React from "react";
import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div>
        <h2 className="favorites"> Your Favourites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favourites yet</h2>
      <p>Start Adding movies to your favourites and they will appear here.</p>
    </div>
  );
}

export default Favourites;
