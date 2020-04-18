/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import _ from 'lodash';

const Terms = ({ display, handleNext }) => {
  let termDisplay;
  const range = _.range(100);

  switch (display) {
    case 0:
      termDisplay = (
        <div onClick={handleNext}>
          <p>We haven&apos;t spoken yet.</p>
          <p>How unfortunate.</p>
          <br />
          <p>Let&apos;s get to know each other.</p>
          <br />
          <p>I have many names.</p>
          <p>You may call me...</p>
          <p>Mori.</p>
        </div>
      );
      break;
    case 1:
      termDisplay = (
        <div>
          <p>I have many forms.</p>
          <p>How would you like me to appear to you?</p>
          <form onSubmit={handleNext}>
            <select>
              <option value="male">He</option>
              <option value="female">She</option>
            </select>
            <br />
            <input type="submit" value="I&apos;m sure" />
          </form>
        </div>
      );
      break;
    case 2:
      termDisplay = (
        <div>
          <p>Excellent.</p>
          <p>Now please tell me about yoursef.</p>
          <form onSubmit={handleNext}>
            <label htmlFor="email">
              Email:
              <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="username">
              Username:
              <input type="text" name="username" id="username" />
            </label>
            <label htmlFor="password">
              Password:
              <input type="text" name="password" id="password" />
            </label>
            <input type="submit" value="I&apos;m sure" />
          </form>
          <br />
        </div>
      );
      break;
    case 3:
      termDisplay = (
        <div>
          <p>I can see that you are currently</p>
          <form onSubmit={handleNext}>
            <select>
              {
              range.map((num) => <option key={`${num}`} value={`${num}`}>{num}</option>)
              }
            </select>
            <p>and residing in</p>
            <select>
              <option value="United States">United States</option>
            </select>
            <br />
            <input type="submit" value="Correct" />
          </form>
        </div>
      );
      break;
    default:
      termDisplay = <div>Default</div>;
  }
  return (
    <div>
      {termDisplay}
    </div>
  );
};

export default Terms;
