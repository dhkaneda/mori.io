import React from 'react';

const AddContract = ({
  handleInputChange,
  handleContractSubmit,
  description,
  collateral,
  service,
  amount,
}) => {
  return (
    <div>
      <form onSubmit={handleContractSubmit}>
        <input
          type="text"
          name="description"
          defaultValue={description}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="collateral"
          defaultValue={collateral}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="service"
          defaultValue={service}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="amount"
          defaultValue={amount}
          onChange={handleInputChange}
        />
        <br />
        <input type="submit" value="test" />
      </form>
    </div>
  );
};

export default AddContract;
