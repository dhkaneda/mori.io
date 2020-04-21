/* eslint-disable max-len */
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

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
      deadline,
      hasSeenTut,
      setDeadline,
      walkthroughFinish,
      handleContractSubmit,
      handleInputChange,
      description,
      collateral,
      service,
      amount,
    } = this.props;

    let options;
    let select;
    let details;
    let prompt;
    let button;

    if (!hasSeenTut) {
      button = <button type="button" onClick={walkthroughFinish}>I&apos;m sure</button>;
    } else {
      button = <button type="button" onClick={handleContractSubmit}>I&apos;m sure</button>;
    }

    if (currentStep === 1) {
      let prompt2;

      if (!hasSeenTut) {
        prompt2 = (
          <p>You&apos;ll have to place something of value on collateral.</p>
        );
      } else {
        prompt2 = null;
      }

      select = (
        <div>
          {prompt2}
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
      let prompt3;

      if (!hasSeenTut) {
        prompt3 = (
          <p>You&apos;ll elect to forfeit your entire bet should you fail. Now, how much?</p>
        );
      } else {
        prompt3 = null;
      }

      details = (
        <div>
          {prompt3}
          <input
            type="number"
            name="amount"
            defaultValue={amount}
            onChange={handleInputChange}
          />
          <br />
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            showTimeSelect
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <br />
          {button}
        </div>
      );
    } else {
      details = null;
    }

    switch (collateral) {
      case 'vice': {
        let prompt4;

        if (!hasSeenTut) {
          prompt4 = (
            <p>You&apos;ll choose to lock yourself out of these services for an extended time.</p>
          );
        } else {
          prompt4 = null;
        }

        options = (
          <div>
            {prompt4}
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
            <br />
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
              showTimeSelect
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <br />
            {button}
          </div>
        );
      }
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
            <label htmlFor="verify">
              <input
                type="checkbox"
                id="verify"
                checked={isChecked}
                onChange={this.toggleCheck}
              />
              I will forfeit my placed collateral in the event I fail to fullfill my end of the contract.
            </label>
            <br />
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
              showTimeSelect
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <br />
            {button}
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
            <br />
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
              showTimeSelect
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <br />
            {button}
          </div>
        );
        break;
      default:
        options = null;
    }

    if (!hasSeenTut) {
      prompt = (
        <div>
          <p> Now, what would you like to accomplish?</p>
          <p>For all we know, tomorrow could be your last.</p>
        </div>
      );
    } else {
      prompt = null;
    }

    return (
      <div>
        {prompt}
        <label htmlFor="newcontract">
          Before I die, I will...
          <br />
          <input
            id="newcontract"
            type="text"
            name="description"
            defaultValue={description}
            onChange={handleInputChange}
          />
        </label>
        {select}
        {options}
        {details}
        <br />
        <br />
      </div>
    );
  }
}

export default AddContract;
