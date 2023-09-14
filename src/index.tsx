/**
 * Entry point where React renders
 */

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';


const root = document.getElementById('root');
const reactRoot = createRoot(root!);

reactRoot.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
