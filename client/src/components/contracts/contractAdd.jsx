import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import ContextContract from './contextContract';

const ContractAdd = () => {
  const { contracts, setContracts, setAddContractDisplay } = useContext(ContextContract);

  // STATE HOOKS
  const [goal, setGoal] = useState('New goal');
  const [collateral, setCollateral] = useState('');
  const [collateralOption, setCollateralOption] = useState(0);
  const [targetDate, setTargetDate] = useState(new Date());

  // HELPERS
  const handleSubmit = (event) => {
    event.preventDefault();
    let id;
    if (contracts.length === 0) {
      id = 0;
    } else {
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
      activeStatus: true,
    };

    const updatedContracts = [...contracts, contractToAdd];
    setContracts(updatedContracts);

    // persistence
    localStorage.setItem('contracts', JSON.stringify(updatedContracts));
    setAddContractDisplay(false);
    // // reset Inputs
    // setGoal('New goal');
    // setCollateral('Select Collateral');
    // setCollateralOption(0);
    // setTargetDate(new Date());
  };

  // CONDITIONAL ELEMENTS
  // // change select options here
  const selectCollateralOption = (
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
          <option value="credits">$$$</option>
          <option value="life">life</option>
        </select>
        {collateral === 'credits' ? selectCollateralOption : null}
        <DatePicker
          selected={targetDate}
          onChange={(date) => setTargetDate(date)}
          showTimeSelect
          timeIntervals={30}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <input type="submit" value="Submit" />
        <button type="button" onClick={() => setAddContractDisplay(false)}>x</button>
      </form>
    </div>
  );
};

export default ContractAdd;
