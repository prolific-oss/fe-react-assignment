import calculateRewardPerHour from './calculateRewardPerHour';

test('correctly calculates rewardPerHour given time and reward inputs', () => {
  expect(calculateRewardPerHour({ reward: 10, timeInMinutes: 3 })).toEqual(200.0);
  expect(calculateRewardPerHour({ reward: 100, timeInMinutes: 60 })).toEqual(100.0);
});

test('rewardPerHour is 0 when time or reward are 0', () => {
  expect(calculateRewardPerHour({ reward: 0, timeInMinutes: 0 })).toEqual(0.0);
  expect(calculateRewardPerHour({ reward: 10, timeInMinutes: 0 })).toEqual(0.0);
  expect(calculateRewardPerHour({ reward: 0, timeInMinutes: 10 })).toEqual(0.0);
});