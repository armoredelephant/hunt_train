import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import SplashPageO from '@O/00-splash/SplashPageO';

import './sass/base.scss';

const App = () => {
  return (
    <Router>
      <SplashPageO />
    </Router>
  );
};

export default App;
