import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import UserList from './components/UserList';

export default () => {
  return (
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/users" component={UserList} />
    </div>
  );
};
