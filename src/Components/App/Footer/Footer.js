import React, { useState } from "react";
import MovieFormContainer from "./MovieForm/MovieForm";
import "./Footer.scss";

const Footer = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div className="footer">
        <p>Add Movie</p>
        <div className="wrapBtn" onClick={() => setIsShown(!isShown)}></div>
      </div>
      {isShown && <MovieFormContainer />}
    </>
  );
};

export default Footer;
