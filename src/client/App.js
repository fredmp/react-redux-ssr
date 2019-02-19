import React from 'react';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUser } from './actions';
import Header from './components/Header';

// eslint-disable-next-line react/prop-types
const App = ({ route }) => {
  return (
    <div>
      <Header />
      <div className="ui container">
        <div className="ui hidden divider" style={{ marginTop: '50px' }} />
        <h1>SSR Application</h1>
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
};

function loadData(store) {
  return store.dispatch(fetchCurrentUser());
}

export default {
  loadData,
  component: App,
};
