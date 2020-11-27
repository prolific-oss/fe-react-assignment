import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

function PricingCalculator({
  totalCost,
  rewardPerHour,
  setPlaces,
  setReward,
  setTime,
}) {
  return <>
    <div className={styles.inputsWrapper}>
      <h1>Study Pricing Calculator</h1>
      <div>
        <label htmlFor="reward">Participant reward</label>
        <span>£</span>
        <input
          type="number"
          placeholder="Enter amount"
          step="0.01"
          id="reward"
          onChange={(e) => setReward(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="places">Total participants</label>
        <input
          type="number"
          placeholder="Enter amount"
          pattern="[0-9]"
          step="1"
          id="places"
          onChange={(e) => setPlaces(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time">Time to complete (in minutes)</label>
        <input
          type="number"
          placeholder="Enter amount"
          pattern="[0-9]"
          step="1"
          id="time"
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
    </div>

    <div>
      <p>Total cost: <span>£{totalCost}</span></p>
      <p>Reward: <span>£{rewardPerHour}/<small>hr</small></span></p>
    </div>
  </>
}

PricingCalculator.propTypes = {
  setPlaces: PropTypes.func.isRequired,
  setReward: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
}

export default PricingCalculator;