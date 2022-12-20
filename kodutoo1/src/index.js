import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


// Navigeerimiseks on vajalik:
// 1) npm install react-router-dom
// 2) pean ümbritsema <App /> tagi <Browser router> taguiga
// 3) Route ja Routes App.js failis ehk URL ja HTML ühendused
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

