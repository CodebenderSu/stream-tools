import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

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
