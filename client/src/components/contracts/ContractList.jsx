import React from 'react';
import Contract from './Contract';

const ContractList = ({ contracts }) => {
  return (
    <div className="contract-list">
      <h2>Contracts</h2>
      {contracts.map((contract) => <Contract key={contract._id} contract={contract} />)}
    </div>
  );
};

export default ContractList;
