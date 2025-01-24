import { ICoinData, ICoinDataDTO } from '@/types/coins';
import { transformDiffToPercentage } from '@/utils/transform-hours-diff';

export const transformCoinsResponse = (data: ICoinDataDTO) => {
  const result: ICoinData[] = [];

  if (data.usd) {
    for (const crypto in data.usd) {
      const cryptoData = data.usd[crypto];

      const priceInUSD = 1 / cryptoData.rate;

      result.push({
        crypto,
        rate: priceInUSD,
        ask: 1 / cryptoData.ask,
        bid: 1 / cryptoData.bid,
        diff24h: transformDiffToPercentage(cryptoData.rate, cryptoData.diff24h),
      });
    }
  }

  return result;
};
