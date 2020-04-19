import React from 'react';

const SelectSex = ({ handleNext, moriSex, handleInputChange }) => (
  <div>
    <p>I have many forms.</p>
    <p>How would you like me to appear to you?</p>
    <form onSubmit={handleNext}>
      <select name="moriSex" value={moriSex} onChange={handleInputChange}>
        <option value="male">He</option>
        <option value="female">She</option>
      </select>
      <br />
      <input type="submit" value="I&apos;m sure" />
    </form>
  </div>
);

export default SelectSex;
