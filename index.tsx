
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// `index.html` ships with a static loading screen inside `#root`.
// Clear it before mounting so it cannot permanently cover the app.
rootElement.innerHTML = '';

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const loadingScreen = document.getElementById('loading-screen');
if (loadingScreen) {
  loadingScreen.remove();
}
