import React from 'react';

import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { StoreProvider } from './Store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);
