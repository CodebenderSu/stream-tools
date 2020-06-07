import React, { Component } from 'react';
import Countdown from 'react-countdown';
import { withRouter } from 'react-router-dom';

import { queryParse } from '../../functions';
import { countdownOptions } from '../../config.js';

class CountdownTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false // countdown completion status
    }
    this.options = countdownOptions;
    this.queries = queryParse(props.location.search);
    for (let q in this.queries) {
      this.options = { ...this.options, [q]: this.queries[q] };
    };
    this.options.s = parseInt(this.options.s); // Type control
    if (this.options.s) {
      this.options.timestamp = (new Date().getTime() + (this.options.s * 1000));
    } else {
      this.options.timestamp = parseInt(this.options.timestamp); // Type control
    };
    console.log(this.options)
  };
  componentDidMount() {
    if (!this.options.s && !this.options.timestamp) { this.setState({ complete: true })};
  };
  renderer = ({days, hours, minutes, seconds, milliseconds, completed}) => {
    const { options } = this;
    if (completed) {
      this.setState({ complete: true });
      return (
        <div className='countdown-content'>
          <div className='countdown-timer'>
            <span className='timer-text'>{this.options.complete}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className='countdown-timer'>
          <p className='timer-text'>{options.prefix}&nbsp;</p>

          <p className='timer-count'>
          <span title='Days'>
            {options.days
              ? `${days < 10
                ? `0${days}`
                : days} : `
              : ''}
          </span>
          <span title='Hours'>
            {options.hrs
              ? `${hours < 10
                ? `0${hours}`
                : hours} : `
              : ''}
          </span>
          <span title='Minutes'>
            {options.mins
              ? `${minutes < 10
                ? `0${minutes}`
                : minutes} : `
              : ''}
          </span>
          <span title='Seconds'>
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
          <span title='Milliseconds'>
            {options.ms
              ? ` : ${milliseconds < 10
                ? `0${milliseconds}`
                : milliseconds}`
              : ''}
          </span>
          </p>

          <p className='timer-text'>&nbsp;{options.suffix}</p>
        </div>
      );
    }
  };
  render() {
    if (this.state.complete) {
      return (
        <div className='countdown-content'>
          <div className='countdown-timer'>
            <span className='timer-text'>{this.options.complete}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className='countdown-content'>
          <Countdown date={this.options.timestamp} renderer={this.renderer} />
        </div>
      );
    };
  };
};

export default withRouter(CountdownTime);
