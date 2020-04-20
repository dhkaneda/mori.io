import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Entry from './components/Entry';
import Live from './components/Live';
import Login from './components/Login';
import './styles/normalize.css';
import './styles/skeleton.css';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/entry" component={Entry} />
      <Route path="/live" component={Live} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root'),
);
