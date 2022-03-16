import React from "react";

import PlayButton from "./PlayButton/PlayButton";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="info">
        <h1>TIC TAC TOE</h1>
        <PlayButton />
      </div>
    </div>
  );
};

export default Intro;
