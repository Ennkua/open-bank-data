import { z } from 'zod';

const bankSchema = z.object({
  name: z.object({
    en: z.string().min(1, 'English name is required'),
    ar: z.string().min(1, 'Arabic name is required'),
  }),
  yearlyFee: z.number().nonnegative('Yearly fee must be non-negative'),
  perRequestFee: z.number().nonnegative('Per request fee must be non-negative'),
});

const banksSchema = z.array(bankSchema);

export const validateBanks = (data: unknown) => {
  return banksSchema.parse(data);
};
