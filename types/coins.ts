import { coinDataSchema, coinPairDataSchema } from '@/schemas/coinSchema';
import { z } from 'zod';

export interface ICoinPairData extends z.infer<typeof coinPairDataSchema> {}

export interface ICoinDataDTO extends z.infer<typeof coinDataSchema> {}

export interface ICoinData extends ICoinPairData {
  crypto: string;
}
