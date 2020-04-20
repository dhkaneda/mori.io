import React, { Component } from 'react';

class Walkthrough extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { handleSeenTut } = this.props;

    return (
      <div>
        <p>Walkthrough</p>
        <button type="button" onClick={handleSeenTut}>Okay</button>
      </div>
    );
  }
}

export default Walkthrough;
