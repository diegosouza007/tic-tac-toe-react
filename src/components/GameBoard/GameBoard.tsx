import React, { useContext } from 'react';
import OptionsContext from '../../OptionsContext';
import game from '../../game/game';
import './GameBoard.css';

const GameBoard: React.FC = () => {

  // const { options, setOptions } = useContext(OptionsContext);

  console.log(game)

  return (
    <section className="board x">
      <div id="0" className="cell x"></div>
      <div id="1" className="cell"></div>
      <div id="2" className="cell"></div>
      <div id="3" className="cell"></div>
      <div id="4" className="cell"></div>
      <div id="5" className="cell"></div>
      <div id="6" className="cell"></div>
      <div id="7" className="cell"></div>
      <div id="8" className="cell"></div>
    </section>
  );
}

export default GameBoard;