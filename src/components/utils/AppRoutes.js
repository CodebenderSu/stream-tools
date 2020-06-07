import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../../dir/HomePage';
import CountdownPage from '../../dir/CountdownPage';
import { routes } from '../../config.js';

class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.countdown} component={CountdownPage} />
      </Switch>
    );
  };
};

export default AppRoutes;
