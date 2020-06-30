import React, { useContext, useEffect } from 'react';
// import sampleData from '../countdown/sampleData.json';
import ContractItem from './contractItem';
import ContractContext from './contractContext';

const ContractList = () => {
  const { contracts, setContracts } = useContext(ContractContext);

  useEffect(() => {
    const existingContracts = JSON.parse(localStorage.getItem('contracts'));
    if (existingContracts) {
      setContracts(JSON.parse(localStorage.getItem('contracts')));
    } else {
      setContracts([]);
    }
  }, []);

  return (
    <div>
      {contracts && contracts.map((contract) => {
        return <ContractItem key={contract.id} contract={contract} />;
      })}
    </div>
  );
};

export default ContractList;
