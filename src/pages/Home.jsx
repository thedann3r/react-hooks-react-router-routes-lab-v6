import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/movies")
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error("Error fetching movies:", error));
  }, []);

  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Home;