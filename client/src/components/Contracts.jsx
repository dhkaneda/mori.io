import React, { Component } from 'react';
import $ from 'jquery';
import Walkthrough from './contracts/Walkthrough';
import AddContract from './contracts/AddContract';
import ContractList from './contracts/ContractList';
import Countdown from './terms/Countdown';

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
      deadline: new Date(),
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleContractSubmit = this.handleContractSubmit.bind(this);
    this.handleSeenTut = this.handleSeenTut.bind(this);
    this.getContracts = this.getContracts.bind(this);
    this.setDeadline = this.setDeadline.bind(this);
  }

  componentDidMount() {
    const { hasSeenTut } = this.props;
    if (hasSeenTut) {
      this.setState({ hasSeenTut: true });
    }
    this.getContracts();
  }

  setDeadline(deadline) {
    this.setState({ deadline });
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
      deadline,
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
          deadline,
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
      deadline,
      hasSeenTut,
      description,
      collateral,
      service,
      amount,
      contracts,
    } = this.state;
    const { deathday } = this.props;

    let contractDisplay;

    if (!hasSeenTut) {
      contractDisplay = (
        <Walkthrough
          deadline={deadline}
          hasSeenTut={hasSeenTut}
          setDeadline={this.setDeadline}
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
          <Countdown hasSeenTut={hasSeenTut} deathday={deathday} />
          <AddContract
            deadline={deadline}
            hasSeenTut={hasSeenTut}
            setDeadline={this.setDeadline}
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
      <div className="section">
        {contractDisplay}
      </div>
    );
  }
}

export default Contracts;
