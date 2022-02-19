import React from 'react';
import Intro from './components/Intro/Intro';
import MenuOptions from './components/MenuOptions/MenuOptions';
import DifficutyOptions from './components/DifficutyOptions/DifficutyOptions';
import GameScreen from './components/GameScreen/GameScreen';
import './App.css'

export default function MainModal() {
  return (
    <div className="content">
      <Intro />
      <MenuOptions />
      <DifficutyOptions />
      <GameScreen />
    </div>
  );
}