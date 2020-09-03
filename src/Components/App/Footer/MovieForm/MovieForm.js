import React, { useState } from "react";
import "./MovieForm.scss";

const MovieFormContainer = () => {
  return (
    <div className="movieFormContainer">
      <MovieForm />
    </div>
  );
};

const MovieForm = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  return (
    <form className="movieForm">
      <label className="specific">
        Movie title
        {titleError && <ErrorHandler />}
      </label>
      <input
        onChange={(event) => {
          setMovieTitle(event.target.value);
        }}
        onKeyUp={() => {
          if (
            movieTitle.length > 0 &&
            movieTitle[0] !== movieTitle[0].toUpperCase()
          ) {
            setTitleError(true);
          } else {
            setTitleError(false);
          }
        }}
        type="text"
        value={movieTitle}
        placeholder="Type the title of your movie"
      ></input>
      <label>Add planet</label>
      <input type="text" placeholder="Let's search for your planet"></input>
      <button>Add Movie</button>
    </form>
  );
};

const ErrorHandler = () => {
  return (
    <div className="error">
      Movie title name must start with a capital letter.
    </div>
  );
};

export default MovieFormContainer;
