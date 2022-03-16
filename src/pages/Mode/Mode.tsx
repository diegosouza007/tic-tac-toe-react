import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './Mode.css';

export default function MenuOptions() {

  const navigate = useNavigate();

  const selectMode: React.MouseEventHandler<HTMLElement> = (event) => {
    const target = event.target as Element;
    const mode = target.id;

    navigate("/difficulty");
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
