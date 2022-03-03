import React from 'react';
import PlayButton from './PlayButton/PlayButton';
import { Screen } from '../../types/Screen';
import './Intro.css';

const Intro = (props: any) => {

  return (
    <div className={props.screen.intro ? "intro visible" : "intro"}>
        <div className="info">
        <h1>TIC TAC TOE</h1>
        <PlayButton onHandleMenu={props.onHandleMenu}/>
        </div>
    </div>
  )
}

export default Intro;
