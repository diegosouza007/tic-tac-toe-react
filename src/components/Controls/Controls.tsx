import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ScoreContext from '../../ScoreContext';
import './Controls.css';

const Controlls: React.FC = () => {

  const navigate = useNavigate();

  const { setScore } = useContext(ScoreContext);

  function back() {
    navigate("/");
  }

  function resetScore(){
    let newScore: number[] = [0,0];
    setScore([...newScore]);
  }

  return (
    <div className="controls">
        <span className="material-icons" title="Return to homepage" onClick={back}>
            arrow_back
        </span>
        <span className="material-icons" title="Reset score" onClick={resetScore}>
            restart_alt
        </span>
    </div>
  )
}

export default Controlls;