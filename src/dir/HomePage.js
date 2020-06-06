import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../config.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Stream Tools</h1>
        <Link exact to={`${routes.countdown}?s=300`}>Countdown</Link>
      </div>
    );
  };
};

export default HomePage;
