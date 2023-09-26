import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    FullName: z
      .string()
      .min(1, { message: 'Имя должно иметь минимум 1 символ' }),
  }),
});
