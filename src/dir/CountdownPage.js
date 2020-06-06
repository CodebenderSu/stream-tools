import React, { Component } from 'react';

import { queryParse } from '../functions';

class CountdownPage extends Component {
  constructor(props) {
    super(props);
    this.queries = queryParse(props.location.search);
  };
  render() {
    return (
      <div>
        <h1>Countdown</h1>
      </div>
    );
  };
};

export default CountdownPage;
