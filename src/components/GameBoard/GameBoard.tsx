import React, { useContext, useEffect, useState } from "react";
import OptionsContext from "../../providers/OptionsContext";
import ScoreContext from "../../providers/ScoreContext";
import game from "../../game/game";
import "./GameBoard.css";

const GameBoard: React.FC = () => {
  const { options, setOptions } = useContext(OptionsContext);
  const { score, setScore } = useContext(ScoreContext);
  const [board, setBoard] = useState<string[]>(game.controls.board);
  const [playerTurn, setPlayerTurn] = useState<number>(0);
  const [lockHover, setLockHover] = useState<boolean>(false);

  useEffect(() => {
    const mode: string | null = localStorage.getItem("tictactoe@mode");
    const difficuty: string | null = localStorage.getItem("tictactoe@difficuty");

    let updatedOptions = options;

    if (mode && difficuty) {
      updatedOptions.mode = JSON.parse(mode);
      updatedOptions.difficuty = JSON.parse(difficuty);
      setOptions(updatedOptions);
    }
  }, []);

  useEffect(() => {
    const score: string | null = localStorage.getItem("tictactoe@score");
    score && setScore(JSON.parse(score));
  }, []);

  useEffect(() => {
    localStorage.setItem("tictactoe@score", JSON.stringify(score));
  }, [score]);

  const newRound = (): void => {
    let turn: number = 0;
    game.controls.lockMode = false;
    game.clearBoard();
    setPlayerTurn(turn);
    setBoard(game.controls.board);
    setLockHover(false);
  };

  const botPlayTurn = async (difficuty: string): Promise<void> => {
    const position: number = game.getRandomAvailablePosition();
    let player: number = 1;

    await setPlayerTurn(player);

    game.handleMove(position, player);
    checkGameStatus(player);
    game.controls.lockMode = false;
    await setLockHover(false);
    await setPlayerTurn(0);

    if (game.isWinner()) {
      await newRound();
    }
  };

  const checkGameStatus = async (player: number): Promise<void> => {
    const hasTied: boolean = game.isTiedGame();
    const hasWinner: boolean = game.isWinner();

    if (hasWinner) {
      let updatedScore: number[] = score;

      await setTimeout(() => {
        if (player === 0) {
          updatedScore[0]++;
          setScore([...updatedScore]);
        } else {
          updatedScore[1]++;
          setScore([...updatedScore]);
        }
      }, 1000);
    }

    if (hasTied) {
      setTimeout(() => newRound(), 1000);
    }
  };

  const handleMove: React.MouseEventHandler<HTMLElement> = async (event) => {
    const target = event.target as Element;
    const position: number = Number(target.id);
    const hasPositionAvailable: boolean = game.isPositionAvailable(position);

    let player: number = playerTurn;
    setPlayerTurn(player);

    if (!game.controls.lockMode && hasPositionAvailable) {
      game.handleMove(position, player);
      await checkGameStatus(player);

      if (options.mode === "single") {
        game.controls.lockMode = true;
        setLockHover(true);

        switch (options.difficuty) {
          case "easy":
            if (!game.isWinner() && !game.isTiedGame()) {
              player = 1;
              await setPlayerTurn(player);
              await setTimeout(() => botPlayTurn(options.difficuty), 1000);
            }
            if (game.isWinner()) {
              await newRound();
            }
            break;

          default:
            if (game.isWinner()) {
              await newRound();
            }
        }
      } else {
        player === 0 ? player = 1 : player = 0;
        setPlayerTurn(player);
        if (game.isWinner()) {
          await newRound();
        }
      }
    }
  };

  return (
    <section className={`board ${playerTurn === 0 ? "x" : "o"}`}>
      {board.map((flag, index) => {
        return (
          <div
            key={index}
            id={index.toString()}
            className={`cell ${flag}`}
            style={{ cursor: lockHover ? "not-allowed" : "" }}
            onClick={(e) => handleMove(e)}
          ></div>
        );
      })}
    </section>
  );
};

export default GameBoard;
