import React from 'react';
import './MenuOptions.css';

export default function Options() {
  return (
    <div className="menu">
      <div className="options">
        <h2>Game mode select</h2>
          <ul>
            <li>PLAYER VS BOT</li>
            <li>PLAYER VS PLAYER</li>
          </ul>
      </div>
    </div>
  );
}
