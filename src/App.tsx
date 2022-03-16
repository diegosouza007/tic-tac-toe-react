import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="content">
      <Router>
        <MainRoutes />
      </Router>
    </div>
  );
}

export default App;