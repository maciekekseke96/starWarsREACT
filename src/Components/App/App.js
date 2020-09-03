import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";

function App() {
  const [starWarsMovies, setStarWarsMovies] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((resp) => resp.json())
      .then((data) => {
        setStarWarsMovies(data.results);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <MainContent movies={starWarsMovies} />
      <Footer setStarWarsMovies={setStarWarsMovies} />
    </div>
  );
}

export default App;
