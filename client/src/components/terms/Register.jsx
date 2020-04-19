import React from 'react';
import _ from 'lodash';

const Register = ({
  handleCredentialSubmit,
  handleInputChange,
}) => (
  <div>
    <p>Excellent.</p>
    <p>Now please tell me about yourself.</p>
    <form onSubmit={handleCredentialSubmit}>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" id="email" onChange={handleInputChange} />
      </label>
      <label htmlFor="username">
        Username:
        <input type="text" name="username" id="username" onChange={handleInputChange} />
      </label>
      <label htmlFor="password">
        Password:
        <input type="text" name="password" id="password" onChange={handleInputChange} />
      </label>
      <input type="submit" value="I&apos;m sure" />
    </form>
    <br />
  </div>
);

export default Register;
