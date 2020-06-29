import React, { useState, useEffect } from 'react';

const CountdownDigitsContainer = ({ targetDate }) => {
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
    <p>
      {secondsLeft}
    </p>
  );
};

export default CountdownDigitsContainer;
