import React, { useContext, useEffect } from 'react';
import CountdownDigits from './countdownDigits';
import DeathdayContext from './deathdayContext';


const DeathdayCountdown = () => {
  const { deathday, setDeathday } = useContext(DeathdayContext);

  // continually checks for updated deathday in case input is changed
  useEffect(() => {
    setDeathday(Date.parse(localStorage.getItem('deathday')));
  });

  return (
    <CountdownDigits targetDate={deathday} />
  );
};

export default DeathdayCountdown;
