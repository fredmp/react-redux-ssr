import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import routes from './client/routes';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      // eslint-disable-next-line no-param-reassign
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    },
  }),
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log('Running application server...');
});
