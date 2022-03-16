import React from 'react';
import './GameBoard.css';

export default function GameBoard() {
  return (
    <section className="board x">
      <div id="0" className="cell x"></div>
      <div id="1" className="cell o"></div>
      <div id="2" className="cell"></div>
      <div id="3" className="cell x"></div>
      <div id="4" className="cell o"></div>
      <div id="5" className="cell"></div>
      <div id="6" className="cell"></div>
      <div id="7" className="cell x"></div>
      <div id="8" className="cell o"></div>
    </section>
  );
}
