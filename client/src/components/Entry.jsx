import React from 'react';
import { Link } from 'react-router-dom';

const Entry = () => (
  <div className="section">
    <Link to="/login">Login.</Link>
    <br />
    <Link to="/live">Register.</Link>
  </div>
);

export default Entry;
