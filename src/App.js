import React, { useState } from "react";

import PricingCalculator from "./components/PricingCalculator";
import calculateRewardPerHour from "./utils/calculateRewardPerHour";
import calculateTotalCost from "./utils/calculateTotalCost";

import "./App.css";

function App() {
  const [numberOfParticipants, setNumberOfParticipants] = useState("");
  const [reward, setReward] = useState("");
  const [time, setTime] = useState("");
  const FEES_PERCENTAGE = 0.3;
  const VAT_PERCENTAGE = 0.2;

  return (
    <div className="App">
      <PricingCalculator
        totalCost={calculateTotalCost({
          numberOfParticipants,
          reward,
          feesPercentage: FEES_PERCENTAGE,
          vatPercentage: VAT_PERCENTAGE,
        })}
        rewardPerHour={calculateRewardPerHour({ reward, timeInMinutes: time })}
        setNumberOfParticipants={setNumberOfParticipants}
        setReward={setReward}
        setTime={setTime}
      />
    </div>
  );
}

export default App;
