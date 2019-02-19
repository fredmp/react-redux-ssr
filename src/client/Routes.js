import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';

export default () => {
  return (
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/hi" component={() => 'Hello'} />
    </div>
  );
};
