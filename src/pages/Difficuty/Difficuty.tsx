import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Difficuty.css';


export default function Options() {

  const navigate = useNavigate();

  const selectDifficulty: React.MouseEventHandler<HTMLElement> = (event) => {
    const target = event.target as Element;
    const difficulty = target.id;
    
    navigate("/game");
  }
  
  return (
    <div className="difficulty">
      <div className="options">
        <h2>Select a Difficulty</h2>
          <ul>
            <li id="easy" onClick={selectDifficulty}>EASY</li>
            <li id="normal" onClick={selectDifficulty}>NORMAL</li>
            <li id="hard" onClick={selectDifficulty}>HARD</li>
            <li id="impossible" onClick={selectDifficulty}>IMPOSSIBLE</li>
          </ul>
      </div>
    </div>
  );
}
