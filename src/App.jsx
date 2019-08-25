import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { firebaseConfig } from './utils/firebaseConfig';
import firebase from 'firebase';
import "firebase/database";

import SplashPageO from '@O/00-pages/SplashPageO';
import ScouterPageO from '@O/00-pages/ScouterPageO';

import theme from './theme';
import './sass/base.scss';

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={SplashPageO} />
          <Route path="/*" component={ScouterPageO} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
