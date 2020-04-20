/* eslint-disable max-len */
import React, { Component } from 'react';

class AddContract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      isChecked: false,
    };

    this.handleNext = this.handleNext.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  handleNext() {
    let { currentStep } = this.state;
    this.setState({ currentStep: currentStep += 1 });
  }

  toggleCheck() {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });
  }

  render() {
    const { currentStep, isChecked } = this.state;
    const {
      walkthroughFinish,
      handleInputChange,
      handleContractSubmit,
      description,
      collateral,
      service,
      amount,
    } = this.props;

    let options;
    let select;
    let details;

    if (currentStep === 1) {
      select = (
        <div>
          <select
            name="collateral"
            id="collateral"
            value={collateral}
            onChange={handleInputChange}
          >
            <option value="">Select collateral</option>
            <option value="vice">My vices</option>
            <option value="monetary">My fortune</option>
            <option value="digital">My avatar</option>
            <option value="life">My life</option>
          </select>
        </div>
      );
    } else {
      select = (
        <div>
          <button type="button" onClick={this.handleNext}>I&apos;m sure</button>
        </div>
      );
    }

    const monetaryServices = ['paypal', 'cashapp', 'apple'];
    if (monetaryServices.indexOf(service) !== -1) {
      details = (
        <div>
          <input
            type="number"
            name="amount"
            defaultValue={amount}
            onChange={handleInputChange}
          />
        </div>
      );
    } else {
      details = null;
    }

    switch (collateral) {
      case 'vice':
        options = (
          <div>
            <select
              name="service"
              id="service"
              value={service}
              onChange={handleInputChange}
            >
              <option value="">Select service</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">Youtube</option>
              <option value="netflix">Netflix</option>
              <option value="hulu">Hulu</option>
              <option value="amazon">Amazon</option>
            </select>
          </div>
        );
        break;
      case 'monetary':
        options = (
          <div>
            <select
              name="service"
              id="service"
              value={service}
              onChange={handleInputChange}
            >
              <option value="">Select method</option>
              <option value="paypal">Paypal</option>
              <option value="apple">Apple Pay</option>
              <option value="cashapp">CashApp</option>
            </select>
          </div>
        );
        break;
      case 'digital':
        options = (
          <div>
            <select
              name="service"
              id="service"
              value={service}
              onChange={handleInputChange}
            >
              <option value="">Select service</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">Youtube</option>
            </select>
          </div>
        );
        break;
      case 'life':
        options = (
          <div>
            <label htmlFor="verify">
              <input
                type="checkbox"
                id="verify"
                checked={isChecked}
                onChange={this.toggleCheck}
              />
              I will forfeit my placed collateral in the event I fail to fullfill my end of the contract.
            </label>
          </div>
        );
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
          {select}
          {options}
          {details}
          <input type="submit" value="submit contract" />
        </form>
      </div>
    );
  }
}

export default AddContract;
