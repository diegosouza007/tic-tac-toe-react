import React, { useEffect } from 'react';
import './MenuOptions.css';

export default function MenuOptions(props: any) {
  return (
    <div className={props.screen.menu ? "menuOptions visible" : "menuOptions"}>
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
