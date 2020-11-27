import calculateRewardPerHour from './calculateRewardPerHour';

test('correctly calculates rewardPerHour given time and reward inputs', () => {
  expect(calculateRewardPerHour(10, 3)).toEqual(200.00);
  expect(calculateRewardPerHour(100, 60)).toEqual(100.00);
})

test('rewardPerHour is 0 when time or reward are 0', () => {
  expect(calculateRewardPerHour(0, 0)).toEqual(0.00);
  expect(calculateRewardPerHour(10, 0)).toEqual(0.00);
  expect(calculateRewardPerHour(0, 10)).toEqual(0.00);
});
