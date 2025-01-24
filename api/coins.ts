import { coinDataSchema } from '@/schemas/coinSchema';
import { transformCoinsResponse } from './utils/transform-data-to-usd';
import { ICoinData } from '@/types/coins';

export const getCoinsInfo = async (): Promise<ICoinData[]> => {
  const response = await fetch(
    'https://app.youhodler.com/api/v3/rates/extended'
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  const parsedData = coinDataSchema.parse(data);

  const transformedData = transformCoinsResponse(parsedData);

  return transformedData;
};
