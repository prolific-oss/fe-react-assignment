export default function calculateTotalCost(
  places,
  reward,
  feesPercentage,
  vatPercentage
) {
  // Fees are charged as a percentage of the cost for all places
  // VAT is charged as a percentage of the fees
  // Total cost is the base cost plus fees plus VAT
  return places * reward;
}
