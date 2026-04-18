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
  organizationName: z.string().min(1, "Organization name is required"),
  contactName: z.string().min(1, "Your name is required"),
  email: z.string().email("Enter a valid email").min(1, "Enter a valid email"),
  phone: z.string().optional().or(z.literal("")),
  website: z
    .string()
    .url("Enter a valid URL (include https://)")
    .optional()
    .or(z.literal("")),
  partnershipType: z.enum(
    [
      "strategic-giving",
      "cause-marketing",
      "employee-engagement",
      "gifts-in-kind",
      "event-partnership",
      "other",
    ],
    { errorMap: () => ({ message: "Please select a partnership type" }) }
  ),
  message: z
    .string()
    .min(10, "Please share at least a short note about your interest"),
});

export type PartnerInquiryInput = z.infer<typeof partnerInquiryRules>;
