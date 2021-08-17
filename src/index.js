import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

fetch("https://api.hubstaff.com/v2/users/me/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
});