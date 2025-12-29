import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './App.tsx';
import './i18n/config';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);