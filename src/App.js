import React, { useState } from 'react';

import PricingCalculator from './components/PricingCalculator';
import calculateRewardPerHour from './utils/calculateRewardPerHour';
import calculateTotalCost from './utils/calculateTotalCost';

import './App.css';

function App() {
  const [numberOfParticipants, setNumberOfParticipants] = useState("");
  const [rewardPerParticipant, setRewardPerParticipant] = useState("");
  const [time, setTime] = useState("");
  const FEES_PERCENTAGE = 0.3;
  const VAT_PERCENTAGE = 0.2;

  return (
    <div className="App">
      <PricingCalculator
        totalCost={calculateTotalCost({
          numberOfParticipants,
          rewardPerParticipant,
          feesPercentage: FEES_PERCENTAGE,
          vatPercentage: VAT_PERCENTAGE,
        })}
        rewardPerHour={calculateRewardPerHour({ rewardPerParticipant, timeInMinutes: time })}
        setNumberOfParticipants={setNumberOfParticipants}
        setRewardPerParticipant={setRewardPerParticipant}
        setTime={setTime}
      />
    </div>
  );
}

export default App;
