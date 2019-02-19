import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';

export default ({ path }, store) => {
  const content = renderToString(
    <Provider store={store}>
      <Router location={path} context={{}}>
        <Routes />
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
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
