import { z } from 'zod';

export const coinPairDataSchema = z.object({
  rate: z.number(),
  ask: z.number(),
  bid: z.number(),
  diff24h: z.number(),
});

export const coinDataSchema = z.record(
  z.string().describe('Base coin (e.g. BTC, ETH)'),
  z.record(
    z.string().describe('Quote coin (e.g. USD, EUR)'),
    coinPairDataSchema
  )
);
