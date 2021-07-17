import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.querySelector('body').style.textTransform = 'lowercase';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

