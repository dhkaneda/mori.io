import React, { useState, useEffect } from 'react';
import numberWithCommas from './helpers/numberWithCommas';

const CountdownDigitsContainer = ({ targetDate }) => {
  const [secondsLeft, setSecondsLeft] = useState('loading');

  const findSeconds = () => {
    const now = new Date();
    const secondsNow = Math.floor((targetDate - now.getTime()) / 1000);

    if (secondsNow === 0) {
      alert('OVER');
    } else {
      return numberWithCommas(secondsNow);
    }
  };


  // starts countdown automatically
  useEffect(() => {
    setTimeout(() => {
      setSecondsLeft(findSeconds());
    }, 1000);
  });

  if (secondsLeft < 1) {
    return (
      <p>
        Forfeit.
      </p>
    );
  }
  return (
    <p>
      {secondsLeft}
    </p>
  );
};

export default CountdownDigitsContainer;
