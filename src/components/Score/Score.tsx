import React, { useContext, useEffect, useState } from 'react';
import ScoreContext from '../../ScoreContext';
import './Score.css';

const Score: React.FC = () => {

  const { score } = useContext(ScoreContext);

  return (
    <div className="score">
      <div className="player">
        <div>
          <p>Player X</p>
        </div>
        <div>
          <p>Player O</p>
        </div>
      </div>
      <div className="playerScore">
        <span id="player-x-score">
          <p>{score[0]}</p>
        </span>
        <span id="player-o-score">
          <p>{score[1]}</p>
        </span>
      </div>
    </div>
  );
}

export default Score;