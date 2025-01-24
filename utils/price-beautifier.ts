export const priceBeautifier = (price: number): string => {
  if (price >= 1) {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  if (price >= 0.01) {
    return price.toFixed(4);
  }

  return price.toFixed(8);
};
