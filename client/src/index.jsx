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
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleEmailChange(email) {
    this.setState({ email, hasSeenTut: true });
  }

  render() {
    const { email, hasSeenTut } = this.state;

    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/entry" component={Entry} />
          <Route path="/live" component={Live} />
          <Route path="/contracts" render={() => <Contracts email={email} hasSeenTut={hasSeenTut} />} />
          <Route path="/login" render={() => <Login handleEmailChange={this.handleEmailChange} />} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <Routing />,
  document.getElementById('root'),
);
