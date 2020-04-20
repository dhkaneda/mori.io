import React from 'react';
import { Link } from 'react-router-dom';

const Entry = () => (
  <div>
    <Link to="/login">Login.</Link>
    <Link to="/live">Register.</Link>
  </div>
);

export default Entry;
