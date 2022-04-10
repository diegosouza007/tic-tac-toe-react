import React, { useState, createContext } from "react";
import { Options } from "../types/Types";

type PropsOptionsContext = {
  options: Options;
  setOptions: React.Dispatch<React.SetStateAction<Options>>;
};

const DEFAULT_VALUE = {
  options: {
    mode: "versus",
    difficuty: "easy"
  },
  setOptions: () => {},
};

const OptionsContext = createContext<PropsOptionsContext>(DEFAULT_VALUE);

const OptionsProvider: React.FC = ({ children }) => {
  const [options, setOptions] = useState(DEFAULT_VALUE.options);

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};

export { OptionsProvider };
export default OptionsContext;
