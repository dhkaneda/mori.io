import React, { Component } from 'react';
import AddContract from './AddContract';

class Walkthrough extends Component {
  constructor(props) {
    super(props);

    this.walkthroughFinish = this.walkthroughFinish.bind(this);
  }

  walkthroughFinish(event) {
    const { handleSeenTut, handleContractSubmit } = this.props;
    handleSeenTut(event);
    handleContractSubmit(event);
  }

  render() {
    const {
      hasSeenTut,
      handleInputChange,
      description,
      collateral,
      service,
      amount,
    } = this.props;

    return (
      <div>
        <p>Walkthrough</p>
        <AddContract
          handleSeenTut={hasSeenTut}
          walkthroughFinish={this.walkthroughFinish}
          handleInputChange={handleInputChange}
          description={description}
          collateral={collateral}
          service={service}
          amount={amount}
        />
      </div>
    );
  }
}

export default Walkthrough;
