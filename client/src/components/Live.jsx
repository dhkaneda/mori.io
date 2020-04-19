/* eslint-disable no-alert */
import React, { Component } from 'react';
import $ from 'jquery';
import Terms from './Terms';
import Goals from './Goals';

class Live extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      moriSex: 'male',
      email: '',
      username: '',
      password: '',
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
    } = this.state;
    if (password.length < 8) {
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
    console.log('change');
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
      page = <Goals />;
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
      <div>
        {page}
      </div>
    );
  }
}

export default Live;
