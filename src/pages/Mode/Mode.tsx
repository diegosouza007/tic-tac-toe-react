import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import OptionsContext from '../../OptionsContext';

import './Mode.css';

const Mode: React.FC = () => {

  const navigate = useNavigate();
  const { options, setOptions } = useContext(OptionsContext);

  const selectMode: React.MouseEventHandler<HTMLElement> = (event) => {
    const target = event.target as Element;
    const mode = target.id;

    let newOptions = options; 

    if (mode === "single") {
      newOptions.mode = "single";
    } else {
      newOptions.mode = "versus";
    }
    
    setOptions(newOptions);

    options.mode === 'single' ? navigate("/difficulty") : navigate("/game");
  }

  return (
    <div className="menuOptions">
      <div className="options">
        <h2>Mode select</h2>
          <ul>
            <li id="single" onClick={selectMode}>1 PLAYER</li>
            <li id="versus" onClick={selectMode}>2 PLAYERS</li>
          </ul>
      </div>
    </div>
  );
}

export default Mode;
