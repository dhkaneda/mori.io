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
      collateral: '',
      service: '',
      amount: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleContractSubmit = this.handleContractSubmit.bind(this);
    this.handleSeenTut = this.handleSeenTut.bind(this);
    this.getContracts = this.getContracts.bind(this);
  }

  componentDidMount() {
    this.getContracts();
  }

  getContracts() {
    const { email } = this.props;
    $.get('/api/users', { email })
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
    if (target.name === 'collateral') {
      this.setState({ service: '' });
    }
    this.setState({ [target.name]: target.value });
  }

  handleSeenTut(event) {
    event.preventDefault();
    this.setState({
      hasSeenTut: true,
      description: '',
      collateral: '',
      service: '',
      amount: '',
    });
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
      .then(() => {
        this.getContracts();
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
          hasSeenTut={hasSeenTut}
          handleSeenTut={this.handleSeenTut}
          handleInputChange={this.handleInputChange}
          handleContractSubmit={this.handleContractSubmit}
          description={description}
          collateral={collateral}
          service={service}
          amount={amount}
        />
      );
    } else {
      contractDisplay = (
        <div>
          <AddContract
            hasSeenTut={hasSeenTut}
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
