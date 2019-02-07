import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Template from './components/Template';

const getRoutes = () => (
  <Route
    path='/'
    component={Template}
  >

  </Route>
)

const Routes = getRoutes();

export default Routes;
