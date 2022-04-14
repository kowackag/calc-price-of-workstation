import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';

import App from './component/App';

import GlobalStyle from './styles/Global';
import ResetStyle from './styles/Reset';
import { theme } from './styles/theme';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyle/>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>, document.querySelector('#root')
);