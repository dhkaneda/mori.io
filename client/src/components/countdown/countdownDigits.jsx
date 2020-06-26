import React, { useState, useEffect } from 'react';

const CountdownDigits = () => {
  const [deathday, setDeathday] = useState('');
  const [secondsLeft, setSecondsLeft] = useState('loading');

  const findSeconds = () => {
    const now = new Date();
    return (Math.floor((deathday - now.getTime()) / 1000));
  };

  // continually checks for updated deathday in case input is changed
  useEffect(() => {
    setDeathday(Date.parse(localStorage.getItem('deathday')));
  });

  // starts countdown automatically
  useEffect(() => {
    setTimeout(() => {
      setSecondsLeft(findSeconds());
    }, 1000);
  });

  return (
    <div>
      {secondsLeft}
    </div>
  );
};

export default CountdownDigits;
