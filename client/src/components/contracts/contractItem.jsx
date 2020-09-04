import React from 'react';
import moment from 'moment';
import CountdownDigits from '../countdown/countdownDigits';

const ContractItem = ({ contract, setInactive }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{contract.goal}</h2>
        <div className="card-details">
          <p>
            <span>
              {contract.collateral.type}
            </span>
            <span>
              //
            </span>
            <span>
              {contract.collateral.type === 'credits' ? contract.collateral.collateralOption : null}
            </span>
          </p>
          <p>
            {moment(contract.targetDate).format('MMM DD, YYYY')}
          </p>
        </div>
      </div>
      <div className="card-footer">
        <p>
          <CountdownDigits targetDate={Date.parse(contract.targetDate)} setInactive={setInactive} />
        </p>
      </div>
    </div>
  );
};

export default ContractItem;
