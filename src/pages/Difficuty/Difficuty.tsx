import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import OptionsProvider from '../../OptionsContext';
import './Difficuty.css';


const Difficuty: React.FC = () => {

  const navigate = useNavigate();
  const { options, setOptions } = useContext(OptionsProvider);

  const selectDifficulty: React.MouseEventHandler<HTMLElement> = (event) => {
    const target = event.target as Element;
    const difficulty = target.id;

    let newOptions = options;

    switch(difficulty) {
      case 'easy':
        newOptions.difficuty = 'easy';
        break;
      case 'normal':
        newOptions.difficuty = 'normal';
        break;
      case 'hard':
        newOptions.difficuty = 'hard';
        break;
      case 'impossible':
        newOptions.difficuty = 'impossible';
        break;
      default: 
      newOptions.difficuty = 'easy';
    }
    setOptions(newOptions);
    
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

export default Difficuty;