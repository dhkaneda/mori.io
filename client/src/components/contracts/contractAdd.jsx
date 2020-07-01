import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import ContractContext from './contractContext';

const ContractAdd = () => {
  const { contracts, setContracts } = useContext(ContractContext);

  // STATE HOOKS
  const [goal, setGoal] = useState('New goal');
  const [collateral, setCollateral] = useState('');
  const [collateralOption, setCollateralOption] = useState(0);
  const [targetDate, setTargetDate] = useState(new Date());

  // HELPERS
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
      collateral: {
        type: collateral,
        collateralOption,
      },
      targetDate,
      created: new Date(),
    };

    const updatedContracts = [...contracts, contractToAdd];
    setContracts(updatedContracts);

    // persistence
    localStorage.setItem('contracts', JSON.stringify(updatedContracts));

    // reset Inputs
    setGoal('New goal');
    setCollateral('Select Collateral');
    setCollateralOption(0);
    setTargetDate(new Date());
  };

  // CONDITIONAL ELEMENTS
  // // change select options here
  const selectOption = (
    <input
      type="number"
      name="collateralOption"
      min="0"
      onChange={({ target }) => {
        setCollateralOption(target.value);
      }}
    />
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={goal}
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
          <option value="invalid">select collateral</option>
          <option value="credits">credits</option>
          <option value="avatar">avatar</option>
          <option value="life">life</option>
        </select>
        { /* change line below for different selections based on previous options */ }
        {collateral === 'credits' ? selectOption : null}
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
