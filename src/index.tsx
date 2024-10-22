import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placeCount={5} isAuthorized={false}/>
  </React.StrictMode>
);
