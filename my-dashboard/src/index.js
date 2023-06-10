import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import { theme } from './Components/Typography';
import { ThemeProvider } from '@emotion/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
