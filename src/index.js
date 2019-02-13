import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import Routes from './getRoutes';
import Relay from 'react-relay';
import useRelay from 'react-router-relay';
import { RelayNetworkLayer, urlMiddleware } from 'react-relay-network-layer';
import { relayApi } from './config/endpoints';
// import auth from './utils/auth';

import * as serviceWorker from './serviceWorker';

const createHeaders = () => {
  const token = 'very-strong-json-web-token';
  if (token) {
    return { Authorization: `Bearer ${token}` }
  } else {
    return {}
  }
};

Relay.injectNetworkLayer(
  new RelayNetworkLayer([
    urlMiddleware({
      url: (req) => relayApi,
    }),
    next => req => {
      req.headers = {
        ...req.headers,
        ...createHeaders()
      }
      return next(req)
    },
  ],{disableBatchQuery: true})
);

ReactDOM.render(
  <Router
    environment={Relay.Store}
    render={applyRouterMiddleware(useRelay)}
    history={browserHistory}
    routes={Routes}
  />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
