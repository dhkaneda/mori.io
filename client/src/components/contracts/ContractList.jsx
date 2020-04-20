import React from 'react';
import Contract from './Contract';

const ContractList = ({ contracts }) => {
  return (
    <div>
      {contracts.map((contract) => <Contract contract={contract} />)}
    </div>
  );
};

export default ContractList;
