import React, { useContext, useEffect, useState } from 'react';
import OptionsContext from '../../OptionsContext';
import ScoreContext from '../../ScoreContext';
import game from '../../game/game';
import './GameBoard.css';

const GameBoard: React.FC = () => {

  const { options } = useContext(OptionsContext);
  const { score, setScore } = useContext(ScoreContext);
  const [ board, setBoard ] = useState<string[]>(game.controls.board);
  const [ playerTurn, setPlayerTurn ] = useState<number>(game.controls.playerTurn);

  useEffect(()=>{
    setPlayerTurn(game.controls.playerTurn);
  },[board]);

  const handleMove:React.MouseEventHandler<HTMLElement> = (event) => {

    const target = event.target as Element;
    const position:number  = Number(target.id);

    if(!game.controls.lockMode){
        game.handleMove(position);
        setPlayerTurn(game.controls.playerTurn);
    }

    if(game.isTiedGame()) {
        setTimeout(() => {
          game.newRound();
          setBoard(game.controls.board);
      }, 1000);
    }
    
    if(game.isWinner()) {

          let updatedScore: number[] = score;

          game.controls.lockMode = true;
          setTimeout(() => {

          if(playerTurn === 0) {
            updatedScore[0]++
            setScore([...updatedScore]);
          } else  {
            updatedScore[1]++
            setScore([...updatedScore]);
          }
          game.newRound();
          setBoard(game.controls.board);
      }, 1000);
    }
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