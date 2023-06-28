// HomeFooter.js
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function HomeFooter() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        const data = await response.json();
        setMovies([data.data.movie]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      <h1>Home Footer</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img
            src={movie.medium_cover_image}
            alt={movie.title}
            style={{ width: "230px", height: "345px" }}
          />
        </div>
      ))}
    </div>
  );
}
