import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function PricingCalculator({
  totalCost,
  rewardPerHour,
  setNumberOfParticipants,
  setRewardPerParticipant,
  setTime,
}) {
  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.inputsContainer}>
        <h1 className={styles.headingPrimary}>Study Pricing Calculator</h1>
        <div className={styles.inputSection}>
          <label htmlFor="rewardPerParticipant">Participant reward</label>
          <span className={styles.currencySymbol}>£</span>
          <input
            type="number"
            placeholder="Enter reward amount"
            step="0.01"
            id="rewardPerParticipant"
            className={styles.rewardInput}
            onChange={(e) => setRewardPerParticipant(e.target.value)}
          />
        </div>
        <div className={styles.inputSection}>
          <label htmlFor="numberOfParticipants">Total number of participants</label>
          <input
            type="number"
            placeholder="Enter number of participants"
            pattern="[0-9]"
            step="1"
            id="numberOfParticipants"
            onChange={(e) => setNumberOfParticipants(e.target.value)}
          />
        </div>
        <div className={styles.inputSection}>
          <label htmlFor="time">Time to complete (in minutes)</label>
          <input
            type="number"
            placeholder="Enter length of study in mins"
            pattern="[0-9]"
            step="1"
            id="time"
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.resultsContainer}>
      <p>Total cost: <span className={styles.amount}>£{totalCost}</span></p>
      <p>Reward: <span className={styles.amount}>£{rewardPerHour}/<small>hr</small></span></p>
    </div>
    </div>
  )
}

PricingCalculator.propTypes = {
  totalCost: PropTypes.number.isRequired,
  rewardPerHour: PropTypes.number.isRequired,
  setNumberOfParticipants: PropTypes.func.isRequired,
  setRewardPerParticipant: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
}

export default PricingCalculator;
