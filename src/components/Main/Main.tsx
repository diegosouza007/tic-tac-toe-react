import React from 'react';
import PlayButton from './PlayButton/PlayButton';
import './Main.css';
import DifficutyOptions from '../DifficutyOptions/DifficutyOptions';
import GameScreen from '../GameScreen/GameScreen';

export default function MainModal() {
  return (
    <div className="content">
      <div className="intro">
          <div className="info">
              <h1>TIC TAC TOE</h1>
              <PlayButton />
          </div>
      </div>
      <DifficutyOptions />
      <GameScreen />
    </div>
  );
}
