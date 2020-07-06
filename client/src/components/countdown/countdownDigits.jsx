import React, { useState, useEffect } from 'react';

const CountdownDigitsContainer = ({ targetDate }) => {
  const [secondsLeft, setSecondsLeft] = useState('loading');

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const findSeconds = () => {
    const now = new Date();
    const secondsNow = Math.floor((targetDate - now.getTime()) / 1000);

    if (secondsNow === 0) {
      alert('OVER');
    } else {
      return numberWithCommas(secondsNow);
    }
  };

  const findYears = (milliseconds) => {
    const now = new Date();
    const yearsNow = Math.floor((milliseconds - now.getTime()) / 31556952000);
    return yearsNow;
  };

  const findMonths = (milliseconds) => {
    const now = new Date();
    const monthsNow = Math.floor((milliseconds - now.getTime()) / 2629756000);
    return monthsNow;
  };

  const findWeeks = (milliseconds) => {
    const now = new Date();
    const weeksNow = Math.floor((milliseconds - now.getTime()) / 604800000);
    return weeksNow;
  };

  const findDays = (milliseconds) => {
    const now = new Date();
    const daysNow = Math.floor((milliseconds - now.getTime()) / 86400000);
    return daysNow;
  };

  const findHours = (milliseconds) => {
    const now = new Date();
    const hoursNow = Math.floor((milliseconds - now.getTime()) / 3600000);
    return hoursNow;
  };

  const findMinutes = (milliseconds) => {
    const now = new Date();
    const minutesNow = Math.floor((milliseconds - now.getTime()) / 60000);
    return minutesNow;
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
