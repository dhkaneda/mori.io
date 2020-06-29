// the job of this component is to take in a future date and to determine the seconds remaining,
// then pass that information to deathdayView to render.
import React, { useState } from 'react';
import determineDeathday from './helpers/lifeExpectancy';

const DeathdayInput = () => {
  const [sex, setSex] = useState('male');
  const [age, setAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(typeof determineDeathday(sex, age));
    localStorage.setItem('deathday', determineDeathday(sex, age));
  };

  const handleChange = ({ target }) => {
    if (target.name === 'age') {
      target.value = parseInt(target.value, 10);
      setAge(target.value);
    } else if (target.name === 'sex') {
      setSex(target.value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="sex" id="sex" value={sex} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="number" name="age" min="18" max="100" onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default DeathdayInput;
