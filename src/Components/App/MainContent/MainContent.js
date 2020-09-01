import React from "react";
import MovieElement from "./MovieElement/MovieElement";
import "./MainContent.scss";

const MainContent = (props) => {
  return (
    <div className="mainContent">
      {props.movies.map((movie, index) => {
        return <MovieElement key={index} movie={movie} />;
      })}
    </div>
  );
};

export default MainContent;
