import React from 'react';
import './styles/app.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const init = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default init;
