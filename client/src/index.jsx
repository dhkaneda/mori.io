import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Contracts from './components/Contracts';
import Home from './components/Home';
import Entry from './components/Entry';
import Live from './components/Live';
import Login from './components/Login';
import 'react-datepicker/dist/react-datepicker.css';
import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/custom.css';


class Routing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      hasSeenTut: false,
      deathday: null,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleDeathday = this.handleDeathday.bind(this);
  }

  handleEmailChange(email) {
    this.setState({ email, hasSeenTut: true });
  }

  handleDeathday(deathday) {
    this.setState({ deathday });
  }

  render() {
    const { email, hasSeenTut, deathday } = this.state;

    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/entry" component={Entry} />
          <Route path="/live" component={Live} />
          <Route path="/contracts" render={() => <Contracts email={email} hasSeenTut={hasSeenTut} deathday={deathday} />} />
          <Route path="/login" render={() => <Login handleEmailChange={this.handleEmailChange} handleDeathday={this.handleDeathday} />} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <Routing />,
  document.getElementById('root'),
);
