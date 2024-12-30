import { z } from "zod";

export const subscribeNewsLetterRules = z.object({
  email: z.string().email("Enter a valid email").min(1, "Enter a valid email"),
});

export type subscribeToNewsLetterInput = z.infer<
  typeof subscribeNewsLetterRules
>;
