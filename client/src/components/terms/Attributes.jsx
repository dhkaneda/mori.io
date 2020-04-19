import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';

class Attributes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      location: 'United States',
      age: 18,
      sex: 'male',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAttributeSubmit = this.handleAttributeSubmit.bind(this);
  }

  componentDidMount() {
    $.get('/api/stats', (stats) => {
      this.setState({ countries: stats });
    });
  }

  handleInputChange({ target }) {
    console.log('change');
    this.setState({ [target.name]: target.value });
  }

  handleAttributeSubmit(event) {
    event.preventDefault();
    const { age, location, sex } = this.state;
    const { email, handleNext, assignDeathday } = this.props;

    // FIX PATCH
    $.ajax({
      url: '/api/users',
      type: 'PATCH',
      data: {
        email,
        age,
        sex,
        location,
      },
    })
      .then((res) => {
        if (res.name && res.name === 'MongoError') {
          alert('There was an error updating the user');
        } else {
          assignDeathday(res.deathday);
          handleNext(event);
        }
      });
  }

  render() {
    const {
      countries,
      location,
      age,
      sex,
    } = this.state;
    const range = _.range(18, 100);

    return (
      <div>
        <p>I can see that you are currently</p>
        <form onSubmit={this.handleAttributeSubmit}>
          <select name="age" value={age} onChange={this.handleInputChange}>
            {range.map((num) => <option key={`${num}`} value={`${num}`}>{num}</option>)}
          </select>
          <select name="sex" value={sex} onChange={this.handleInputChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p>and residing in</p>
          <select name="location" value={location} onChange={this.handleInputChange}>
            {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
          </select>
          <br />
          <input type="submit" value="Correct" />
        </form>
      </div>
    );
  }
}

export default Attributes;
