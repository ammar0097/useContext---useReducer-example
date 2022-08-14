import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TextContextProvider } from './contexts/textContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TextContextProvider>
    <App />
    </TextContextProvider>
  </React.StrictMode>
);
