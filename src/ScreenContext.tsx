import React, { useState, createContext } from "react";
import { Screen, Options } from './types/Types';

type PropsScreenContext = {
    screen: Screen;
    setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}

const DEFAULT_VALUE = {
    screen: {
        intro: true,
        menu: false,
        difficuty: false,
        gameScreen: false,
    },
    setScreen: () => {},
};

const ScreenContext = createContext<PropsScreenContext>(DEFAULT_VALUE);

const ScreenProvider: React.FC = ({ children }) => {

    const [screen, setScreen] = useState(DEFAULT_VALUE.screen);

    return (
        <ScreenContext.Provider value={{screen, setScreen}}>
            {children}
        </ScreenContext.Provider>
    );
};

export { ScreenProvider };
export default ScreenContext;
