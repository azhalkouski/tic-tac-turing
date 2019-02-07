import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Template from './components/Template';
import Home from './components/Home';
import Profile from './components/Profile';

const getRoutes = () => (
  <Route
    path='/'
    component={Template}
  >
    <IndexRoute
      component={Home}
    />
    <Route
      path='/profile'
      component={Profile}
    />
  </Route>
)

const Routes = getRoutes();

export default Routes;
