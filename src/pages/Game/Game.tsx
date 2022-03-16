import React from 'react';
import Controls from '../../components/Controls/Controls';
import GameBoard from '../../components/GameBoard/GameBoard';
import Score from '../../components/Score/Score';
import './Game.css';

export default function GameScreen() {
  return (
    <div className="game">
        <Controls />
        <GameBoard />
        <Score />
    </div>
  );
}
