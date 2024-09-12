import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';
import './assets/styles/index.css';  // Assuming you have a global CSS file
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
