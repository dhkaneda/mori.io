import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Live from './components/Live';
import './styles/normalize.css';
import './styles/skeleton.css';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/live" component={Live} />
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root'),
);
