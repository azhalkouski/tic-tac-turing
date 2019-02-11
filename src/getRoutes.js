import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Template from './containers/Template';
import TicTacToe from './containers/TicTacToe';
import Profile from './containers/Profile';

const getRoutes = () => (
  <Route
    path='/'
    component={Template}
  >
    <IndexRoute
      component={TicTacToe}
    />
    <Route
      path='/profile'
      component={Profile}
    />
  </Route>
)

const Routes = getRoutes();

export default Routes;
