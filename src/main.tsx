import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import Portfolio from './pages/Portfolio';
import './i18n/config';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);