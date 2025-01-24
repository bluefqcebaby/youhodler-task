export const transformDiffToPercentage = (rate: number, diff24h: number) => {
  const previousRate = rate - diff24h;
  const percentageChange = ((rate - previousRate) / previousRate) * 100;

  return -percentageChange;
};
