import React from 'react';

const AddContract = ({
  walkthroughFinish,
  handleInputChange,
  handleContractSubmit,
  description,
  collateral,
  service,
  amount,
}) => {
  return (
    <div>
      <form onSubmit={walkthroughFinish || handleContractSubmit}>
        <input
          type="text"
          name="description"
          defaultValue={description}
          onChange={handleInputChange}
        />
        <br />
        <select
          name="collateral"
          id="collateral"
          value={collateral}
          onChange={handleInputChange}
        >
          <option value="vice">My vices</option>
          <option value="monetary">My fortune</option>
          <option value="digital">My avatar</option>
          <option value="life">My life</option>
        </select>
        <br />
        {/* <input
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
        <br /> */}
        <input type="submit" value="test" />
      </form>
    </div>
  );
};

export default AddContract;
