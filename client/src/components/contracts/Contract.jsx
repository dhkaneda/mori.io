/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import Countdown from '../terms/Countdown';

const Contract = ({ contract }) => {
  let service;

  if (contract.collateral === 'monetary') {
    contract.service = contract.amount;
    service = <p className="desc">{`$${contract.service}`}</p>;
  } else {
    service = <p className="desc">{contract.service}</p>;
  }

  return (
    <div className="contract-container">
      <p className="desc">{contract.description}</p>
      <Countdown selectClass="contractSelect" propClass="contractCountdown" deathday={contract.deadline} hasSeenTut={true} />
      <p className="desc collateral">{contract.collateral}</p>
      {service}
    </div>
  );
};

export default Contract;
