import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import theme from './utils/theme';
import { AppRouter } from './routes/router';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme} initial={false}>
      <RouterProvider router={AppRouter}/>
  </ThemeProvider>
  </React.StrictMode>
);


