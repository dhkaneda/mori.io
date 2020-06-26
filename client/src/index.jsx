import React from 'react';
import ReactDOM from 'react-dom';
import './styles/normalize.css';
import Countdown from './components/countdown/countdown';

const App = () => {
  return (
    <div>
      <Countdown />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
