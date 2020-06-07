import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { baseRoute } from './config.js';

class Root extends Component {
  render () {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        {this.props.children}
      </Router>
    );
  };
};

export default Root;
