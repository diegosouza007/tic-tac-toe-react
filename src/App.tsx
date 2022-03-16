import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Intro from './components/Intro/Intro';
import Mode from './components/Mode/Mode';
import Difficuty from './components/Difficuty/Difficuty';
import Game from './components/Game/Game';

import { ScreenProvider } from './ScreenContext';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="content">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}/>
        <Route path="mode" element={<Mode />}/>
        <Route path="difficulty" element={<Difficuty />}/>
        <Route path="game" element={<Game />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;