import React, { Component } from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      weeks: 0,
      months: 0,
      years: 0,
      change: false,
      selected: 'seconds',
    };

    this.timer = this.timer.bind(this);
    this.setChange = this.setChange.bind(this);
    this.setSelected = this.setSelected.bind(this);
  }

  componentDidMount() {
    const intervalId = setInterval(this.timer, 1000);
    this.timer();
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  setChange() {
    this.setState({ change: true });
  }

  setSelected({ target }) {
    this.setState({
      [target.name]: target.value,
      change: false,
    });
  }

  timer() {
    const { deathday } = this.props;
    const now = new Date();
    const death = Date.parse(deathday);
    const seconds = Math.floor((death - now.getTime()) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4);
    const years = Math.floor(months / 12);

    this.setState({
      seconds,
      minutes,
      hours,
      days,
      weeks,
      months,
      years,
    });
  }

  render() {
    const { change, selected } = this.state;
    const { handleNext } = this.props;
    let unit;
    const display = this.state[selected];

    if (!change) {
      unit = <span id="unit-select" onClick={this.setChange}>{selected}</span>;
    } else {
      unit = (
        <select name="selected" value={selected} onChange={this.setSelected}>
          <option value="seconds">seconds</option>
          <option value="minutes">minutes</option>
          <option value="hours">hours</option>
          <option value="days">days</option>
          <option value="weeks">weeks</option>
          <option value="months">months</option>
          <option value="years">years</option>
        </select>
      );
    }

    return (
      <div>
        <p>It looks like you have about</p>
        <h1>{display}</h1>
        <p>
          {unit}
          <span> left.</span>
        </p>
        <p>Now, let&apos;s make good use of it.</p>
        <button type="button" onClick={handleNext}>Okay</button>
      </div>
    );
  }
}

export default Countdown;
