// src/main.jsx (UPDATED with AOS initialization)

import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the /client import for React 18+
import App from './App.jsx';
import './index.css'; 

// === AOS IMPORTS AND INITIALIZATION ===
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// Initialize AOS globally here
AOS.init({
    duration: 100, // duration of the animation in ms
    once: true,    // Animate only once when scrolling down
});
// ======================================


// --- This section is CRITICAL ---
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
);