import React from 'react';
import Contract from './Contract';

const ContractList = ({ contracts }) => {
  return (
    <div>
      <p>Open Contracts</p>
      {contracts.map((contract) => <Contract key={contract._id} contract={contract} />)}
    </div>
  );
};

export default ContractList;
