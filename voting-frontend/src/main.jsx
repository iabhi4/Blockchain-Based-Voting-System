// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Ensure your CSS file is correctly linked
import App from './App';
import { AppProvider } from './context/AppContext';

ReactDOM.render(
  <React.StrictMode>
   
      <App />
  
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <React.StrictMode>
//     //<AppProvider>
//       <App />
//    // </AppProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
