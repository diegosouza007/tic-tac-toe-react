import React, { useContext, useEffect, useState } from 'react';
import OptionsContext from '../../OptionsContext';
import game from '../../game/game';
import './GameBoard.css';

const GameBoard: React.FC = () => {

  const { options, setOptions } = useContext(OptionsContext);
  const [ board ] = useState<string[]>(game.controls.board);
  const [ playerTurn, setPlayerTurn ] = useState<number>(game.controls.playerTurn);

  const handleMove:React.MouseEventHandler<HTMLElement> = async (event) => {

    const target = event.target as Element;
    const position:number  = Number(target.id);

    game.handleMove(position);
    setPlayerTurn(game.controls.playerTurn);
  }

  return (
    <section className={`board ${ playerTurn === 0 ? 'x' : 'o' }`}>
      {board.map((flag, index) => {
          return <div key={index} id={index.toString()} className={`cell ${flag}`} onClick={(e) => handleMove(e)}></div>
      })}
    </section>
  );
}

export default GameBoard;