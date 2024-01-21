// Group component
import React, { useState } from 'react';
import InitialInvestment from './InitialInvestment';
import AnnualInvestment from './AnnualInvestment';
import Duration from './Duration';
import Return from './Return';
import './index.css';
import Result from './Result';

export default function Group() {
  const [initialInvestmentAmount, setInitialInvestmentAmount] = useState(null);
  const [initialAnnualAmount, setInitialAnnualAmount] = useState(null);
  const [duration, setDuration] = useState(null);
  const [returnValue, setReturnValue] = useState(null);
  const [buttonState, setButtonState] = useState(false);

  const handleInvestment = (e) => {
    setInitialInvestmentAmount(e.target.value);
  };

  const handleAnnualInvestment = (e) => {
    setInitialAnnualAmount(e.target.value);
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleReturn = (e) => {
    setReturnValue(e.target.value);
  };

  function isClicked() {
    setButtonState(true);
  };

  return (
    <>
      <div className="input-group" id="user-input">
        <InitialInvestment initialInvestmentAmount={initialInvestmentAmount} onInvestmentChange={handleInvestment} />
        <AnnualInvestment initialAnnualAmount={initialAnnualAmount} onAnnualInvestmentChange={handleAnnualInvestment} />
        <Return returnValue={returnValue} onReturnChange={handleReturn} />
        <Duration duration={duration} onDurationChange={handleDuration} />
      </div>
      <button className='button1' onClick={isClicked}>GENERATE</button>
      {buttonState && <div id="result"  >
        <Result
          initialInvestmentAmount={initialInvestmentAmount}
          initialAnnualAmount={initialAnnualAmount}
          returnValue={returnValue}
          duration={duration}
        />
      </div>}
    </>
  );
}
