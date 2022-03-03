import React, { useState } from 'react';
import Intro from './components/Intro/Intro';
import MenuOptions from './components/MenuOptions/MenuOptions';
import DifficutyOptions from './components/DifficutyOptions/DifficutyOptions';
import GameScreen from './components/GameScreen/GameScreen';
import { Screen } from './types/Screen';
import './App.css';

export default function MainModal() {

  const [screen, setScreen ] = useState<Screen>({
    intro: true,
    menu: false,
    difficuty: false,
    gameScreen: false,
  });

  function onHandleMenu() {
      const updatedOptions = { ...screen }
      updatedOptions.intro = !updatedOptions.intro;
      updatedOptions.menu = !updatedOptions.menu;
      setScreen(updatedOptions);
  }

  return (
    <div className="content">
      <Intro screen={screen} onHandleMenu={onHandleMenu}/>
      <MenuOptions screen={screen}/>
      <DifficutyOptions screen={screen}/>
      <GameScreen screen={screen}/>
    </div>
  );
}