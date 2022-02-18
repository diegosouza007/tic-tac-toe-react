import React from 'react';
import './Controls.css';

export default function Controlls() {
  return (
    <div className="controls">
        <span className="material-icons" title="Return to homepage">
            arrow_back
        </span>
        <span className="material-icons" title="Reset score">
            restart_alt
        </span>
    </div>
  )
}
