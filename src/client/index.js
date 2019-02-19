import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import reducers from './reducers';

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <div>{renderRoutes(routes)}</div>
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
