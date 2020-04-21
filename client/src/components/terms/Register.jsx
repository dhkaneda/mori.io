import React from 'react';

const Register = ({
  handleCredentialSubmit,
  handleInputChange,
}) => (
  <div>
    <p>Excellent.</p>
    <p>Now please tell me about yourself.</p>
    <form onSubmit={handleCredentialSubmit}>
      <label htmlFor="email">
        Email
        <br />
        <input type="email" name="email" id="email" onChange={handleInputChange} />
      </label>
      <label htmlFor="username">
        Username
        <br />
        <input type="text" name="username" id="username" onChange={handleInputChange} />
      </label>
      <label htmlFor="password">
        Password
        <br />
        <input type="password" name="password" id="password" onChange={handleInputChange} />
      </label>
      <label htmlFor="password">
        Password (verify)
        <br />
        <input type="password" name="password2" id="password2" onChange={handleInputChange} />
      </label>
      <input type="submit" value="I&apos;m sure" />
    </form>
    <br />
  </div>
);

export default Register;
