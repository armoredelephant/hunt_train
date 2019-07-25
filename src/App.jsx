import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import SplashPageO from '@O/00-pages/SplashPageO';

import theme from './theme';
import './sass/base.scss';

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <Router>
            <Route exact path='/' component={SplashPageO} />
            <Route exact path='/scouter' />
            <Route exact path='/train' />
        </Router>
      </ThemeProvider>
  );
};

export default App;
