import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import App from './components/App';
import './styles/normalize.css';
import './styles/skeleton.css';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/App">App</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/app" component={App} />
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root'),
);
