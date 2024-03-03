import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { BasicDataProvider } from './hooks/BasicData';
import { Routes } from './routes';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <ToastContainer theme="dark" />
      <GlobalStyles />
      <BrowserRouter>
        <BasicDataProvider>
          <Routes />
        </BasicDataProvider>
      </BrowserRouter>
    </>
  </React.StrictMode>
);
