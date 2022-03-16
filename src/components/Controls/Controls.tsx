import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Controls.css';

export default function Controlls() {

  const navigate = useNavigate();

  function back() {
    navigate("/");
  }

  return (
    <div className="controls">
        <span className="material-icons" title="Return to homepage" onClick={back}>
            arrow_back
        </span>
        <span className="material-icons" title="Reset score">
            restart_alt
        </span>
    </div>
  )
}
