import React from 'react';
import _ from 'lodash';

const Terms = ({ display, handleNext }) => {
  let termDisplay;
  const range = _.range(100);

  switch (display) {
    case 0:
      termDisplay = (
        <div>
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
          <p>He, or She?</p>
          <br />
        </div>
      );
      break;
    case 2:
      termDisplay = (
        <div>
          <p>Excellent.</p>
          <p>Now please tell me about yoursef.</p>
          <form>
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
          </form>
          <br />
        </div>
      );
      break;
    case 3:
      termDisplay = (
        <div>
          <p>I can see that you are currently</p>
          <form>
            <select>
              {
              range.map((num) => <option value={`${num}`}>{num}</option>)
              }
            </select>
            <p>and residing in</p>
            <select>
              <option value="United States">United States</option>
            </select>
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
      <button type="button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Terms;
