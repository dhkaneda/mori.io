/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import Countdown from '../terms/Countdown';

const Contract = ({ contract }) => {
  return (
    <div>
      <p>{contract.description}</p>
      <Countdown deathday={contract.deadline} hasSeenTut={true} />
    </div>
  );
};

export default Contract;
