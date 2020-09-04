import React, { useState, useContext, useEffect } from 'react';
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
  const [listDisplay, setListDisplay] = useState('Active');

  useEffect(() => {
    const existingContracts = JSON.parse(localStorage.getItem('contracts'));
    if (existingContracts) {
      setContracts(JSON.parse(localStorage.getItem('contracts')));
    } else {
      setContracts([]);
    }
  }, []);

  let contractList;
  if (listDisplay === 'Active') {
    contractList = contracts.map((contract) => {
      const now = moment();

      if (moment(contract.targetDate).isBefore(now) || !contract.activeStatus) {
        contract.activeStatus = false;
        localStorage.setItem('contracts', JSON.stringify(contracts));
        return null;
      }

      return <ContractItem key={contract.id} contract={contract} />;
    });
    contractList.push(
      addContractDisplay ? <ContractAdd /> : <button className="card" type="button" value="+" onClick={() => setAddContractDisplay(true)}>+</button>,
    );
  } else if (listDisplay === 'Forfeit') {
    contractList = contracts.map((contract) => {
      return !contract.activeStatus && <ContractItem key={contract.id} contract={contract} />;
    });
  }

  return (
    <div>
      <div className="nav">
        <button type="button" onClick={() => setListDisplay('Active')}>Active</button>
        <button type="button" onClick={() => setListDisplay('Forfeit')}>Forfeit</button>
      </div>
      <section className="flex-container">
        {contractList}
      </section>
    </div>
  );
};

export default ContractList;
