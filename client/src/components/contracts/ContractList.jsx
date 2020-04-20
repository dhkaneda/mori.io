import React from 'react';
import Contract from './Contract';

const ContractList = ({ contracts }) => {
  return (
    <div>
      <p>Open Contracts</p>
      {contracts.map((contract, i) => <Contract key={i} contract={contract} />)}
    </div>
  );
};

export default ContractList;
