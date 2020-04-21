import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="section">
    <h1>memento mori.</h1>
    <h4>Remember you will die.</h4>
    <Link to="/entry">Live.</Link>
  </div>
);

export default Home;
