import React from "react";
import { directors } from "../data";

function Directors() {
  const allDirectors = directors.map((director)=> (
    <div>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return <div>
    <h1>Directors Page</h1>
    {allDirectors}
  </div>;
}

export default Directors;
