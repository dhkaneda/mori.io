import React, { Component } from 'react';
import Terms from './Terms';

class Live extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 0,
    };

    this.handleNext = this.handleNext.bind(this);
  }

  handleNext(event) {
    event.preventDefault();
    let { currentStep } = this.state;
    this.setState({ currentStep: currentStep += 1 });
  }

  render() {
    const { currentStep } = this.state;

    return (
      <div>
        <Terms display={currentStep} handleNext={this.handleNext} />
      </div>
    );
  }
}

export default Live;
