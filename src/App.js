import React from "react";
import SearchMovies from "./SearchMovie";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <h1 className="main_title"> React Search Movie</h1>
      
      <SearchMovies />
    </div>
  );
}
