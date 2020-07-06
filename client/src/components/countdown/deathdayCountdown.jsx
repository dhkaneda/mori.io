import React, { useContext, useEffect } from 'react';
import CountdownDigits from './countdownDigits';
import DeathdayContext from './deathdayContext';
import DeathdayInput from './deathdayInput';


const DeathdayCountdown = () => {
  const {
    deathday,
    setDeathday,
    inputDisplay,
    setInputDisplay,
  } = useContext(DeathdayContext);

  // continually checks for updated deathday in case input is changed
  useEffect(() => {
    setDeathday(Date.parse(localStorage.getItem('deathday')));
  });

  return (
    <div>
      <div onClick={() => setInputDisplay(!inputDisplay)}>
        <CountdownDigits targetDate={deathday} />
      </div>
      { inputDisplay && <DeathdayInput />}
    </div>
  );
};

export default DeathdayCountdown;
