import React, { useContext, useState } from 'react';

import './Mode.css';

export default function MenuOptions() {
  return (
    <div className="menuOptions">
      <div className="options">
        <h2>Mode select</h2>
          <ul>
            <li>1 PLAYER</li>
            <li>2 PLAYERS</li>
          </ul>
      </div>
    </div>
  );
}
