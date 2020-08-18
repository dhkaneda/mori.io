import React, { useContext, useEffect } from 'react';
import moment from 'moment';
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
      <button>Active</button>
      <button>Forfeit</button>
      <section className="flex-container">
        {contracts && contracts.map((contract) => {
          let displayedContract;
          const now = moment();

          if (moment(contract.targetDate).isBefore(now)) {
            contract.activeStatus = false;
            localStorage.setItem('contracts', JSON.stringify(contracts));
            displayedContract = null;
          } else {
            displayedContract = <ContractItem key={contract.id} contract={contract} />;
          }

          return displayedContract;
        })}
        {addContractDisplay ? <ContractAdd /> : <button type="button" value="+" onClick={() => setAddContractDisplay(true)}>+</button>}
      </section>
    </div>
  );
};

export default ContractList;
