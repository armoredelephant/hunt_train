import React, { createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { firebaseConfig } from './utils/firebaseConfig';
import firebase from 'firebase';
import "firebase/database";

import SplashPageO from '@O/00-pages/SplashPageO';
import ScouterPageO from '@O/00-pages/ScouterPageO';

import theme from './theme';
import './sass/base.scss';

// state management
import initialState from 'Utils/initialState';
import scoutDataReducer from 'Utils/scoutDataReducer';

// context
export const DispatchContext = createContext();
export const StateContext = createContext();

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [state, dispatch] = useImmerReducer(scoutDataReducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/" component={SplashPageO} />
              <Route path="/*" component={ScouterPageO} />
            </Switch>
          </Router>
        </ThemeProvider>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default App;
