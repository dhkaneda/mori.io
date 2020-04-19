/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Intro from './terms/Intro';
import SelectSex from './terms/SelectSex';
import Register from './terms/Register';
import Attributes from './terms/Attributes';
import Countdown from './terms/Countdown';

const Terms = ({
  display,
  handleNext,
  handleInputChange,
  handleCredentialSubmit,
  assignDeathday,
  deathday,
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
          assignDeathday={assignDeathday}
          handleCredentialSubmit={handleCredentialSubmit}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
          email={email}
        />
      );
      break;
    case 4:
      termDisplay = (
        <Countdown
          deathday={deathday}
          handleNext={handleNext}
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
