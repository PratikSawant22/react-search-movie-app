import React, { useState } from "react";
import MovieCard from "./MovieCard";
require("dotenv").config();

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  
  const api = process.env.REACT_APP_API_KEY;
  
  function handleChange(e) {
    setQuery(e.target.value);
  }

  const onsubmitform = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={onsubmitform}>
        <label className="label">Movie Name </label>
        <input
          name="query"
          className="input"
          type="text"
          placeholder="e.g Avengers"
          value={query}
          onChange={handleChange}
        />
        <button className="button">Search</button>
      </form>
      <div className="cardList">
        { movies.filter((movie) => movie.poster_path).map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          )) }
      </div>
    </>
  );
}
