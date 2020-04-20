import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>memento mori.</h1>
    <h3>Remember you will die.</h3>
    <Link to="/entry">Live.</Link>
  </div>
);

export default Home;
