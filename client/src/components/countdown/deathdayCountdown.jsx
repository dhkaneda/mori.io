import React, { useState, useEffect } from 'react';
import CountdownDigits from './countdownDigits';


const DeathdayCountdown = () => {
  const [deathday, setDeathday] = useState('');

  // continually checks for updated deathday in case input is changed
  useEffect(() => {
    setDeathday(Date.parse(localStorage.getItem('deathday')));
  });

  return (
    <CountdownDigits targetDate={deathday} />
  );
};

export default DeathdayCountdown;
