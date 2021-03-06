// the job of this component is to take in a future date and to determine the seconds remaining,
// then pass that information to deathdayView to render.
import React, { useContext, useState, useEffect } from 'react';
import determineDeathday from './helpers/lifeExpectancy';
import DeathdayContext from './deathdayContext';

const DeathdayInput = () => {
  const { setDeathday, setInputDisplay } = useContext(DeathdayContext);
  const [sex, setSex] = useState('male');
  const [age, setAge] = useState(0);

  const handleDeathdayInputSubmit = (event) => {
    event.preventDefault();

    const deathday = determineDeathday(sex, age);

    localStorage.setItem('sex', sex);
    localStorage.setItem('age', age);
    localStorage.setItem('deathday', deathday);

    setDeathday(deathday);
    setInputDisplay(false);
  };

  const handleInputChange = ({ target }) => {
    if (target.name === 'age') {
      target.value = parseInt(target.value, 10);
      setAge(target.value);
    } else if (target.name === 'sex') {
      setSex(target.value);
    }
  };

  useEffect(() => {
    const existingSex = localStorage.getItem('sex');
    const existingAge = localStorage.getItem('age');

    if (existingSex && existingAge) {
      console.log('both');
      setSex(existingSex);
      setAge(parseInt(existingAge, 10));
    }
  }, []);

  return (
    <div className="nav">
      <form onSubmit={handleDeathdayInputSubmit}>
        <select name="sex" id="sex" value={sex} onChange={handleInputChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="number" name="age" min="18" max="100" onChange={handleInputChange} value={age} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default DeathdayInput;
