/* eslint-disable no-alert */
import React, { Component } from 'react';
import $ from 'jquery';
import Terms from './Terms';
import Contracts from './Contracts';

class Live extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      moriSex: 'male',
      email: '',
      username: '',
      password: '',
      password2: '',
      deathday: null,
    };

    this.handleNext = this.handleNext.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCredentialSubmit = this.handleCredentialSubmit.bind(this);
    this.assignDeathday = this.assignDeathday.bind(this);
  }

  assignDeathday(deathday) {
    this.setState({ deathday });
  }

  handleNext(event) {
    event.preventDefault();
    let { currentStep } = this.state;
    this.setState({ currentStep: currentStep += 1 });
  }

  handleCredentialSubmit(event) {
    event.preventDefault();
    const {
      email,
      username,
      password,
      password2,
    } = this.state;

    if (password !== password2) {
      alert('Please verify that your passwords match');
    } else if (password.length < 8) {
      alert('Your password must be at least 8 characters');
    } else {
      const user = { email, username, password };
      $.post('/api/users', user)
        .then((res) => {
          if (res.name && res.name === 'MongoError') {
            alert('A user with this email already exists, please log in');
          } else {
            this.handleNext(event);
          }
        });
    }
  }

  handleInputChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const {
      currentStep,
      moriSex,
      deathday,
      email,
    } = this.state;

    let page;

    if (currentStep === 5) {
      page = <Contracts email={email} />;
    } else {
      page = (
        <Terms
          assignDeathday={this.assignDeathday}
          deathday={deathday}
          email={email}
          moriSex={moriSex}
          display={currentStep}
          handleNext={this.handleNext}
          handleInputChange={this.handleInputChange}
          handleCredentialSubmit={this.handleCredentialSubmit}
        />
      );
    }

    return (
      <div className="section">
        {page}
      </div>
    );
  }
}

export default Live;
