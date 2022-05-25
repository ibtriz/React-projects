import { Container, Movie, MovieList } from "./style.js";
import "../../style/global.css";
import { useState, useEffect } from "react";
import { Key } from "../../config/key";

function Home() {
  const image_path = "https://image.tmdb.org/t/p/w500/";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //consumir api
    fetch(
      `https://api.themoviedb.org/3/movie/popular?${Key}&language=pt-br&page=1`
    )
      //utilizei crase para referenciar a pasta congig com a key
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <Container>
      <h1>Movies</h1>

      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <a href={`/details/${movie.id}`}>
                <img
                  alt="{movie.title}"
                  src={`${image_path}${movie.poster_path}`}
                />
              </a>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Home;
