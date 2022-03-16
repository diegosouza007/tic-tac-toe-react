import React from 'react';
import Controls from './Controls/Controls';
import GameBoard from './GameBoard/GameBoard';
import './Game.css';
import Score from './Score/Score';

export default function GameScreen() {
  return (
    <div className="game">
        <Controls />
        <GameBoard />
        <Score />
    </div>
  );
}
