import React, { useState, useEffect } from 'react';

const CountdownDigits = ({ targetDate }) => {
  const [secondsLeft, setSecondsLeft] = useState('loading');

  const findSeconds = () => {
    const now = new Date();
    return (Math.floor((targetDate - now.getTime()) / 1000));
  };

  // starts countdown automatically
  useEffect(() => {
    setTimeout(() => {
      setSecondsLeft(findSeconds());
    }, 1000);
  });

  return (
    <h1>
      {secondsLeft}
    </h1>
  );
};

export default CountdownDigits;
