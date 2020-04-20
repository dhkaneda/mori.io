import React, { Component } from 'react';

class AddContract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
    };

    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    let { currentStep } = this.state;
    this.setState({ currentStep: currentStep += 1 });
  }

  render() {
    const { currentStep } = this.state;
    const {
      walkthroughFinish,
      handleInputChange,
      handleContractSubmit,
      description,
      collateral,
      // service,
      // amount,
    } = this.props;

    let options;
    let select;

    if (currentStep === 1) {
      select = (
        <select
          name="collateral"
          id="collateral"
          value={collateral}
          onChange={handleInputChange}
        >
          <option value="vice">My vices</option>
          <option value="monetary">My fortune</option>
          <option value="digital">My avatar</option>
          <option value="life">My life</option>
        </select>
      );
    } else {
      select = <button type="button" onClick={this.handleNext}>I&apos;m sure</button>;
    }

    switch (collateral) {
      case 'vice':
        break;
      case 'monetary':
        break;
      case 'digital':
        break;
      case 'life':
        break;
      default:
        options = null;
    }

    return (
      <div>
        <form onSubmit={walkthroughFinish || handleContractSubmit}>
          <input
            type="text"
            name="description"
            defaultValue={description}
            onChange={handleInputChange}
          />
          <br />
          {select}
          <br />
          {options}
          <input type="submit" value="submit contract" />
        </form>
      </div>
    );
  }
}

export default AddContract;
