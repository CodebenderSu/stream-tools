import React, { Component } from 'react';

import CountdownTime from '../components/countdown/CountdownTime';

class CountdownPage extends Component {
  render() {
    return (
      <div>
        <h1>Countdown</h1>
        <CountdownTime />
      </div>
    );
  };
};

export default CountdownPage;
