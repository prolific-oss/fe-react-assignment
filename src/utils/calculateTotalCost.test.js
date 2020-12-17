import calculateTotalCost from './calculateTotalCost';

test('correctly calculates totalCost given participant and reward inputs', () => {
  expect(calculateTotalCost(1000, 100, 0.3, 0.2)).toEqual(136000.00);
  expect(calculateTotalCost(1, 1, 0.3, 0.2)).toEqual(1.36);
})

test('totalCost is 0 when participants or reward are 0', () => {
  expect(calculateTotalCost(0, 0)).toEqual(0.00);
});
