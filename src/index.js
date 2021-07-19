import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './i18n';

ReactDOM.render(
  <Suspense fallback={<div>loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
