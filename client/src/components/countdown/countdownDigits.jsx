import React, { useState, useEffect } from 'react';
import numberWithCommas from './helpers/numberWithCommas';

const CountdownDigits = ({ targetDate }) => {
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

  if (parseInt(secondsLeft, 10) < 1) {
    return 'Forfeit.';
  }
  return secondsLeft;
};

export default CountdownDigits;
