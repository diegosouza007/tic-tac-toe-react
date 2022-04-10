import React, { useState } from 'react';
import Controls from '../../components/Controls/Controls';
import GameBoard from '../../components/GameBoard/GameBoard';
import Score from '../../components/Score/Score';
import ScoreContext from '../../providers/ScoreContext';
import './Game.css';

export default function GameScreen() {

  const [ score, setScore ] = useState<number[]>([0,0]);

  return (
    <div className="game">
      <ScoreContext.Provider value={{score, setScore}}>
        <Controls />
        <GameBoard />
        <Score />
      </ScoreContext.Provider>
    </div>
  );
}
