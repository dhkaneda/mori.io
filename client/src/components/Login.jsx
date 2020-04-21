import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  handleInputChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleLogin(event) {
    event.preventDefault();
    const { handleEmailChange, handleDeathday } = this.props;
    const { email } = this.state;
    const options = this.state;
    console.log(options);
    $.get('/api/login', options)
      .then((res) => {
        if (res === true) {
          $.get('/api/users', { email })
            .then((user) => {
              console.log(user);
              handleDeathday(user.deathday);
            });
          handleEmailChange(email);
          this.setState({ redirect: true });
        } else if (res === false) {
          return alert('Your login details are incorrect.');
        }
      })
      .catch();
  }

  renderRedirect() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/contracts" />;
    }
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="section">
        {this.renderRedirect()}
        <form onSubmit={this.handleLogin}>
          <label htmlFor="email">
            Email
            <br />
            <input
              id="email"
              type="email"
              name="email"
              defaultValue={email}
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <br />
            <input
              type="password"
              name="password"
              defaultValue={password}
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
