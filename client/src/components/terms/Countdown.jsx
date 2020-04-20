import React, { Component } from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      timeLeft: 0,
    };

    this.timer = this.timer.bind(this);
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

  timer() {
    const { deathday } = this.props;
    const now = new Date();
    const death = Date.parse(deathday);
    const secondsLeft = Math.floor((death - now.getTime()) / 1000);

    this.setState({ timeLeft: secondsLeft });
  }

  render() {
    const { timeLeft } = this.state;
    const { handleNext } = this.props;

    return (
      <div>
        <p>It looks like you have</p>
        <h1>{timeLeft}</h1>
        <p>seconds left.</p>
        <p>Now, let&apos;s make good use of it.</p>
        <button type="button" onClick={handleNext}>Okay</button>
      </div>
    );
  }
}

export default Countdown;
