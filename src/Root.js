import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { routes } from './config.js';

class Root extends Component {
  render () {
    return (
      <Router basename={routes.base}>
        {this.props.children}
      </Router>
    );
  };
};

export default Root;
