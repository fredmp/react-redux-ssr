import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import routes from '../client/routes';

export default ({ path }, store) => {
  const content = renderToString(
    <Provider store={store}>
      <Router location={path} context={{}}>
        <div>{renderRoutes(routes)}</div>
      </Router>
    </Provider>,
  );
  return `
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
