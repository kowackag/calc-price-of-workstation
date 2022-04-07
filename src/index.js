import React from 'react';
import { createRoot } from 'react-dom/client';
import {ThemeProvider} from 'styled-components';

import App from './component/App';

import GlobalStyle from './styles/Global';
import ResetStyle from './styles/Reset';
import { theme } from './styles/theme';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyle/>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);