import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

ReactDOM.hydrate(
  <Router>
    <Routes />
  </Router>,
  document.querySelector('#root'),
);
