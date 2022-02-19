import React from 'react';
import PlayButton from './PlayButton/PlayButton';
import './Intro.css';

export default function Intro() {
  return (
    <div className="intro">
        <div className="info">
        <h1>TIC TAC TOE</h1>
        <PlayButton />
        </div>
    </div>
  )
}
