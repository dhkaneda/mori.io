import React from 'react';
import CountdownDigits from '../countdown/countdownDigits';

const ContractItem = ({ contract }) => {
  return (
    <div>
      <h3>{contract.goal}</h3>
      <p>
        {contract.collateral.type}
      </p>
      <p>
        {contract.collateral.type === 'credits' ? contract.collateral.collateralOption : null}
      </p>
      <CountdownDigits targetDate={Date.parse(contract.targetDate)} />
    </div>
  );
};

export default ContractItem;
