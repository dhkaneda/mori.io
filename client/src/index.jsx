import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// STYLES
import './styles/normalize.css';
import 'react-datepicker/dist/react-datepicker.css';

// COMPONENTS
import ContractContext from './components/contracts/contractContext';
import Countdown from './components/countdown/countdown';
import ContractList from './components/contracts/contractList';
import ContractAdd from './components/contracts/contractAdd';

const App = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('contracts')) {
      setContracts(JSON.parse(localStorage.getItem('contracts')));
    }
  }, []);

  return (
    <div>
      <Countdown />
      <ContractContext.Provider value={{ contracts, setContracts }}>
        <ContractAdd />
        <ContractList />
      </ContractContext.Provider>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
