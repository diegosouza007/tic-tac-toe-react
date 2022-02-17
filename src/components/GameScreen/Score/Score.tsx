import React from 'react';
import './Score.css';

export default function Score() {
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
          <p>0</p>
        </span>
        <span id="player-o-score">
          <p>0</p>
        </span>
      </div>
    </div>
  );
}
