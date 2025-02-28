import "./App.css";
import React from "react";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";

function App() {
  let movie1 = {
    title: "The Godfather",
    release_date: "March 24, 1972",
    poster:
      "https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg",
  };
  let movie2 = {
    title: "The Shawshank Redemption",
    release_date: "September 23, 1994",
    poster:
      "https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/films/the-shawshank-redemption.jpg?itok=4v9Q5v8w",
  };
  const movieNumber = 2;

  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={movie1} />
      ) : (
        <MovieCard movie={movie2} />
      )}
    </>
  );
}

function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
