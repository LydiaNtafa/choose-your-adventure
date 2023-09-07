import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import SessionContextProvider from './components/contextProviders/sessionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <SessionContextProvider>
        <App />
      </SessionContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
