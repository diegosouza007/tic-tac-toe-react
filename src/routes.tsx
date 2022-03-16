import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Intro from './pages/Intro/Intro';
import Mode from './pages/Mode/Mode';
import Difficuty from './pages/Difficuty/Difficuty';
import Game from './pages/Game/Game';

export default function MainRoutes() {
  return (
      <Routes>
          <Route path="/" element={<Intro />}/>
          <Route path="mode" element={<Mode />}/>
          <Route path="difficulty" element={<Difficuty />}/>
          <Route path="game" element={<Game />}/>
      </Routes>
  );
}