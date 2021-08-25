import calculateTotalCost from "./calculateTotalCost";

test("correctly calculates totalCost given numberOfParticipants and rewardPerParticipant inputs", () => {
  expect(
    calculateTotalCost({
      numberOfParticipants: 1000,
      rewardPerParticipant: 100,
      feesPercentage: 0.3,
      vatPercentage: 0.2,
    })
  ).toEqual(136000.00);
  expect(
    calculateTotalCost({
      numberOfParticipants: 1,
      rewardPerParticipant: 1,
      feesPercentage: 0.3,
      vatPercentage: 0.2,
    })
  ).toEqual(1.36);
});

test("totalCost is 0 when numberOfParticipants or rewardPerParticipant are 0", () => {
  expect(calculateTotalCost({ numberOfParticipants: 0, rewardPerParticipant: 0 })).toEqual(
    0.0
  );
});
