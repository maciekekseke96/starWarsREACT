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
  const [planetSearcher, setPlanetSearcher] = useState("");
  const [planetsFound, setPlanetsFound] = useState([]);
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
      <label className="specific">
        Add planet
        {planetsFound.length > 0 && <PlanetsFound planets={planetsFound} />}
      </label>
      <input
        value={planetSearcher}
        onChange={(event) => {
          setPlanetSearcher(event.target.value);
        }}
        onKeyUp={(event) => {
          if (event.target.value.length > 0) {
            fetch(`https://swapi.dev/api/planets/?search=${event.target.value}`)
              .then((resp) => resp.json())
              .then((data) => setPlanetsFound(data.results));
          } else {
            setPlanetsFound([]);
          }
        }}
        type="text"
        placeholder="Let's search for your planet"
      ></input>
      <button>Add Movie</button>
    </form>
  );
};

const PlanetsFound = (props) => {
  return (
    <div className="planetsFound">
      {props.planets.map((planet, index) => {
        return (
          <div key={index} className="planet">
            {planet.name}
          </div>
        );
      })}
    </div>
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
