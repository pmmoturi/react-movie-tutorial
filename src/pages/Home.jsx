import React from "react";

function Home() {
  const movies = [
    {
      id: 1,
      title: "The Godfather",
      release_date: "March 24, 1972",
      poster:
        "https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg",
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

  return;
  <div className="home">
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  </div>;
}

export default Home;
