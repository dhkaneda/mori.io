import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import ContractContext from './contractContext';

const ContractAdd = () => {
  const { contracts, setContracts } = useContext(ContractContext);
  const [goal, setGoal] = useState('');
  const [collateral, setCollateral] = useState('credits');
  const [targetDate, setTargetDate] = useState(new Date());


  const handleSubmit = (event) => {
    event.preventDefault();
    // check for first existing contracts
    let id;
    if (contracts.length === 0) {
      id = 0;
    } else {
      // increment last existing ID
      id = contracts[contracts.length - 1].id + 1;
    }

    const contractToAdd = {
      id,
      goal,
      collateral,
      targetDate,
      created: new Date(),
    };

    const updatedContracts = [...contracts, contractToAdd];
    setContracts(updatedContracts);
    localStorage.setItem('contracts', JSON.stringify(updatedContracts));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue="Goal"
          onChange={({ target }) => {
            setGoal(target.value);
          }}
        />
        <select
          name="collateral"
          id="collateralSelect"
          value={collateral}
          onChange={({ target }) => {
            setCollateral(target.value);
          }}
        >
          <option value="credits">credits</option>
          <option value="avatar">avatar</option>
          <option value="life">life</option>
        </select>
        <DatePicker
          selected={targetDate}
          onChange={(date) => setTargetDate(date)}
          showTimeSelect
          timeIntervals={30}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContractAdd;
