import { z } from "zod";

export const subscribeNewsLetterRules = z.object({
  email: z.string().email("Enter a valid email").min(1, "Enter a valid email"),
});

export type subscribeToNewsLetterInput = z.infer<
  typeof subscribeNewsLetterRules
>;

export const becomeVolunteerRules = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email").min(1, "Enter a valid email"),
  phone: z.string().min(1, "Phone number is required"),
  country: z.string().min(1, "Country is required"),
});

export type becomeVolunteerInput = z.infer<typeof becomeVolunteerRules>;
