import React, { Component } from 'react';
import $ from 'jquery';
import Walkthrough from './contracts/Walkthrough';
import AddContract from './contracts/AddContract';
import ContractList from './contracts/ContractList';

class Contracts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSeenTut: false,
      contracts: [],
      description: '',
      collateral: null,
      service: null,
      amount: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleContractSubmit = this.handleContractSubmit.bind(this);
    this.handleSeenTut = this.handleSeenTut.bind(this);
  }

  componentDidMount() {
    const { email } = this.props;
    $.ajax({
      method: 'GET',
      url: '/api/users',
      data: { email },
    })
      .then((user) => {
        if (user.contracts && user.contracts.length > 0) {
          const { contracts } = user;
          this.setState({ contracts });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleInputChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleSeenTut(event) {
    event.preventDefault();
    this.setState({ hasSeenTut: true });
  }

  handleContractSubmit(event) {
    event.preventDefault();
    const { email } = this.props;
    const {
      description,
      collateral,
      service,
      amount,
    } = this.state;

    $.ajax({
      method: 'POST',
      url: '/api/contracts',
      data: {
        email,
        contract: {
          description,
          collateral,
          service,
          amount,
        },
      },
    })
      .catch((err) => console.error(err));
  }

  render() {
    const {
      hasSeenTut,
      description,
      collateral,
      service,
      amount,
      contracts,
    } = this.state;

    let contractDisplay;

    if (!hasSeenTut) {
      contractDisplay = (
        <Walkthrough
          handleSeenTut={this.handleSeenTut}
        />
      );
    } else {
      contractDisplay = (
        <div>
          <AddContract
            handleInputChange={this.handleInputChange}
            handleContractSubmit={this.handleContractSubmit}
            description={description}
            collateral={collateral}
            service={service}
            amount={amount}
          />
          <ContractList contracts={contracts} />
        </div>
      );
    }

    return (
      <div>
        {contractDisplay}
      </div>
    );
  }
}

export default Contracts;
