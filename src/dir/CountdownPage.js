import React, { Component } from 'react';

import CountdownTime from '../components/countdown/CountdownTime';

class CountdownPage extends Component {
  render() {
    return (
      <div className='countdown-container'>
        <CountdownTime />
      </div>
    );
  };
};

export default CountdownPage;
