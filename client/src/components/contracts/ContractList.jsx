import React from 'react';
import Contract from './Contract';

const ContractList = ({ contracts }) => {
  return (
    <div className="contract-list">
      <h3>Contracts</h3>
      {contracts.map((contract) => <Contract key={contract._id} contract={contract} />)}
    </div>
  );
};

export default ContractList;
