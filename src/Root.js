import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { baseRoute } from './config.js';

class Root extends Component {
  render () {
    return (
      <Router basename={baseRoute}>
        {this.props.children}
      </Router>
    );
  };
};

export default Root;
