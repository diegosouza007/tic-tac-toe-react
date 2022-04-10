import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import OptionsProvider from "../../providers/OptionsContext";
import "./Difficuty.css";

const Difficuty: React.FC = () => {
  const navigate = useNavigate();
  const { options, setOptions } = useContext(OptionsProvider);

  const selectedDifficulty: React.MouseEventHandler<HTMLElement> = (event) => {
    const target = event.target as Element;
    const difficulty = target.id;

    let newOptions = options;

    switch (difficulty) {
      case "easy":
        newOptions.difficuty = "easy";
        localStorage.setItem("tictactoe@difficuty", JSON.stringify(newOptions.difficuty));
        break;
      case "normal":
        newOptions.difficuty = "normal";
        localStorage.setItem("tictactoe@difficuty", JSON.stringify(newOptions.difficuty));
        break;
      case "hard":
        newOptions.difficuty = "hard";
        localStorage.setItem("tictactoe@difficuty", JSON.stringify(newOptions.difficuty));
        break;
      case "impossible":
        newOptions.difficuty = "impossible";
        localStorage.setItem("tictactoe@difficuty", JSON.stringify(newOptions.difficuty));
        break;
      default:
        newOptions.difficuty = "easy";
        localStorage.setItem("tictactoe@difficuty", JSON.stringify(newOptions.difficuty));
    }

    setOptions(newOptions);
    navigate("/game");
  };

  return (
    <div className="difficulty">
      <div className="options">
        <h2>Select a Difficulty</h2>
        <ul>
          <li id="easy" onClick={selectedDifficulty}>
            EASY
          </li>
          <li id="normal" onClick={selectedDifficulty}>
            NORMAL
          </li>
          <li id="hard" onClick={selectedDifficulty}>
            HARD
          </li>
          <li id="impossible" onClick={selectedDifficulty}>
            IMPOSSIBLE
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Difficuty;
