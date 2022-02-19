import React from 'react';
import './DifficutyOptions.css';

export default function Options() {
  return (
    <div className="menu">
      <div className="options">
        <h2>Select a Difficulty</h2>
          <ul>
            <li>EASY</li>
            <li>NORMAL</li>
            <li>HARD</li>
            <li>IMPOSSIBLE</li>
          </ul>
      </div>
    </div>
  );
}
