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

export const partnerInquiryRules = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  workEmail: z
    .string()
    .email("Enter a valid work email")
    .min(1, "Work email is required"),
  organizationName: z.string().optional().or(z.literal("")),
  message: z.string().optional().or(z.literal("")),
});

export type PartnerInquiryInput = z.infer<typeof partnerInquiryRules>;

export const volunteerApplicationRules = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Enter a valid email").min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  country: z.string().min(1, "Country is required"),
  interests: z
    .array(
      z.enum(["education", "health", "community", "other"])
    )
    .min(1, "Please select at least one area of interest"),
  interestsOther: z.string().optional().or(z.literal("")),
  availability: z.enum(["weekdays", "weekends", "both"], {
    errorMap: () => ({ message: "Please select your availability" }),
  }),
  hoursPerWeek: z
    .string()
    .min(1, "Let us know your available hours per week"),
  motivation: z
    .string()
    .min(10, "Please share a short note about your motivation"),
});

export type VolunteerApplicationInput = z.infer<
  typeof volunteerApplicationRules
>;
