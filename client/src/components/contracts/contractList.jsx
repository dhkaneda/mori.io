import React, { useContext, useEffect } from 'react';
// import sampleData from '../countdown/sampleData.json';
import ContractItem from './contractItem';
import ContextContract from './contextContract';
import ContractAdd from './contractAdd';

const ContractList = () => {
  const {
    contracts,
    setContracts,
    addContractDisplay,
    setAddContractDisplay,
  } = useContext(ContextContract);

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
      {addContractDisplay ? <ContractAdd /> : <button type="button" value="+" onClick={() => setAddContractDisplay(true)}>+</button>}
    </div>
  );
};

export default ContractList;
