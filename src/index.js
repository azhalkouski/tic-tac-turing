import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './getRoutes';
import Relay from 'react-relay';
import userRelay from 'react-router-relay';
import { RelayNetworkLayer, urlMiddleware } from 'react-relay-network-layer';
import { relayApi } from './config/endpoints';
import auth from './utils/auth';

import * as serviceWorker from './serviceWorker';

const createHeaders = () => {
  let idToken = auth.getToken()
  if (idToken) {
    return { Authorization: `Bearer ${idToken}` }
  } else {
    return {}
  }
}

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={Routes}
  />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
