import React, { useContext } from 'react';
import sampleData from '../countdown/sampleData.json';
import ContractItem from './contractItem';
import ContractContext from './contractContext';

const ContractList = () => {
  const { contracts } = useContext(ContractContext);

  return (
    <div>
      {sampleData.map((contract) => {
        return <ContractItem key={contract.id} contract={contract} />;
      })}
      <p>
        {JSON.stringify(contracts)}
      </p>
    </div>
  );
};

export default ContractList;
