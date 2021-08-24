import calculateTotalCost from './calculateTotalCost';

test('correctly calculates totalCost given participant and reward inputs', () => {
  expect(
    calculateTotalCost({
      numberOfParticipants: 1000,
      rewardPerParticipant: 100,
      feesPercentage: 0.3,
      vatPercentage: 0.2,
    })
  ).toEqual(136000.00);
  expect(
    calculateTotalCost({ numberOfParticipants: 1, rewardPerParticipant: 1, feesPercentage: 0.3, vatPercentage: 0.2 })
  ).toEqual(1.36);
});

test('totalCost is 0 when participants or reward are 0', () => {
  expect(calculateTotalCost({ numberOfParticipants: 0, reward: 0 })).toEqual(0.00);
});
