import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Routes from '../client/Routes';

export default ({ path }) => {
  const content = renderToString(
    <Router location={path} context={{}}>
      <Routes />
    </Router>,
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
