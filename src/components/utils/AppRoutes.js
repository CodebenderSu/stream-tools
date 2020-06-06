import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../../dir/HomePage';
import CountdownPage from '../../dir/CountdownPage';
import { routes } from '../../config.js';

class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.countdown} exact component={CountdownPage} />
        <Redirect from='*' exact to={routes.home} component={HomePage} />
      </Switch>
    );
  };
};

export default AppRoutes;
