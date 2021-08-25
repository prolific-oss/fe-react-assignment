import calculateRewardPerHour from './calculateRewardPerHour';

test('correctly calculates rewardPerHour given timeInMinutes and rewardPerParticipant inputs', () => {
  expect(calculateRewardPerHour({ rewardPerParticipant: 10, timeInMinutes: 3 })).toEqual(200.00);
  expect(calculateRewardPerHour({ rewardPerParticipant: 100, timeInMinutes: 60 })).toEqual(100.00);
});

test('rewardPerHour is 0 when timeInMinutes or rewardPerParticipant are 0', () => {
  expect(calculateRewardPerHour({ rewardPerParticipant: 0, timeInMinutes: 0 })).toEqual(0.00);
  expect(calculateRewardPerHour({ rewardPerParticipant: 10, timeInMinutes: 0 })).toEqual(0.00);
  expect(calculateRewardPerHour({ rewardPerParticipant: 0, timeInMinutes: 10 })).toEqual(0.00);
});
