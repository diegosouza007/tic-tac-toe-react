import React, { useState, createContext } from "react";

type PropsScoreContext = {
  score: number[];
  setScore: React.Dispatch<React.SetStateAction<number[]>>;
};

const DEFAULT_VALUE = {
  score: [0, 0],
  setScore: () => {},
};

const ScoreContext = createContext<PropsScoreContext>(DEFAULT_VALUE);

const ScoreProvider: React.FC = ({ children }) => {
  const [score, setScore] = useState([0, 0]);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export { ScoreProvider };
export default ScoreContext;
