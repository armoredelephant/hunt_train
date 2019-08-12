import React from 'react';
import { ThemeProvider } from 'styled-components';

import ScouterPageO from '@O/00-pages/ScouterPageO';

import theme from './theme';
import './sass/base.scss';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScouterPageO />
    </ThemeProvider>
  );
};

export default App;
