import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// STYLES
import './styles/normalize.css';
import './styles/styles.css';
import 'react-datepicker/dist/react-datepicker.css';

// COMPONENTS
import DeathdayContext from './components/countdown/deathdayContext';
import ContextContract from './components/contracts/contextContract';
import MainCountdown from './components/countdown/mainCountdown';
import ContractList from './components/contracts/contractList';

const App = () => {
  const [contracts, setContracts] = useState([]);
  const [inputDisplay, setInputDisplay] = useState(false);
  const [addContractDisplay, setAddContractDisplay] = useState(false);
  const [deathday, setDeathday] = useState('');

  useEffect(() => {
    if (localStorage.getItem('contracts')) {
      setContracts(JSON.parse(localStorage.getItem('contracts')));
    }
  }, []);

  return (
    <div>
      <DeathdayContext.Provider value={{
        deathday,
        setDeathday,
        inputDisplay,
        setInputDisplay,
      }}
      >
        <MainCountdown />
        <ContextContract.Provider value={{
          contracts,
          setContracts,
          addContractDisplay,
          setAddContractDisplay,
        }}
        >
          <ContractList />
        </ContextContract.Provider>
      </DeathdayContext.Provider>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
