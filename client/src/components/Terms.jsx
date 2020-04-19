/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import _ from 'lodash';
import Intro from './terms/Intro';
import SelectSex from './terms/SelectSex';
import Register from './terms/Register';
import Attributes from './terms/Attributes';

const Terms = ({
  display,
  handleNext,
  handleInputChange,
  handleCredentialSubmit,
  moriSex,
  email,
}) => {
  let termDisplay;

  switch (display) {
    case 0:
      termDisplay = <Intro handleNext={handleNext} />;
      break;
    case 1:
      termDisplay = (
        <SelectSex
          handleNext={handleNext}
          moriSex={moriSex}
          handleInputChange={handleInputChange}
        />
      );
      break;
    case 2:
      termDisplay = (
        <Register
          handleCredentialSubmit={handleCredentialSubmit}
          handleInputChange={handleInputChange}
        />
      );
      break;
    case 3:
      termDisplay = (
        <Attributes
          handleCredentialSubmit={handleCredentialSubmit}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
          email={email}
        />
      );
      break;
    default:
      termDisplay = <div>Default</div>;
  }
  return (
    <div>
      {termDisplay}
    </div>
  );
};

export default Terms;
