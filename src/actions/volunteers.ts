"use server";

import { getSanityWriteClient } from "@/lib/sanity/sanity.write.client";
import {
  VolunteerApplicationInput,
  volunteerApplicationRules,
} from "@/validations";
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";
import { getErrorMessage } from "@/utils";
import { revalidateTag } from "next/cache";
import { CACHE_TAGS } from "@/constants/enum";

const interestLabels: Record<string, string> = {
  education: "Education Support",
  health: "Health & Medical Outreach",
  community: "Community Development",
  other: "Other",
};

const availabilityLabels: Record<string, string> = {
  weekdays: "Weekdays",
  weekends: "Weekends",
  both: "Both",
};

export async function submitVolunteerApplication(
  input: VolunteerApplicationInput
) {
  const translate = await getTranslations();
  try {
    const validation = volunteerApplicationRules.safeParse(input);
    if (!validation.success) {
      return { error: translate("errors.bad-request") };
    }

    const data = validation.data;
    const submittedAt = new Date().toISOString();

    const writeClient = getSanityWriteClient();
    if (!writeClient) {
      console.error(
        "submitVolunteerApplication: SANITY_WRITE_TOKEN is missing. Add an Editor API token in .env."
      );
      return { error: translate("errors.something-went-wrong") };
    }

    await writeClient.create({
      _type: "volunteerApplication",
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      country: data.country,
      interests: data.interests,
      interestsOther: data.interestsOther || undefined,
      availability: data.availability,
      hoursPerWeek: data.hoursPerWeek,
      motivation: data.motivation,
      status: "new",
      submittedAt,
    });

    revalidateTag(CACHE_TAGS.VOLUNTEER_APPLICATIONS);

    const emailToken = process.env.EMAIL_TOKEN;
    const sender = process.env.EMAIL_SENDER_ADDRESS;
    const recipient = process.env.EMAIL_RECEIVER_ADDRESS;

    if (emailToken && sender && recipient) {
      try {
        const emailClient = new Resend(emailToken);
        const interestList = data.interests
          .map((i) => interestLabels[i] ?? i)
          .join(", ");
        await emailClient.emails.send({
          from: sender,
          to: recipient,
          subject: `New volunteer application — ${data.fullName}`,
          html: `
            <h2>New Volunteer Application</h2>
            <p><strong>Name:</strong> ${escape(data.fullName)}</p>
            <p><strong>Email:</strong> ${escape(data.email)}</p>
            <p><strong>Phone:</strong> ${escape(data.phone)}</p>
            <p><strong>Country:</strong> ${escape(data.country)}</p>
            <p><strong>Areas of interest:</strong> ${escape(interestList)}</p>
            ${
              data.interestsOther
                ? `<p><strong>Other (specify):</strong> ${escape(data.interestsOther)}</p>`
                : ""
            }
            <p><strong>Availability:</strong> ${escape(availabilityLabels[data.availability] ?? data.availability)}</p>
            <p><strong>Hours per week:</strong> ${escape(data.hoursPerWeek)}</p>
            <p><strong>Motivation:</strong></p>
            <p>${escape(data.motivation).replaceAll("\n", "<br/>")}</p>
          `,
        });
      } catch (mailError) {
        console.warn(
          "Volunteer application saved but email notification failed:",
          getErrorMessage(mailError)
        );
      }
    }

    return { success: true as const };
  } catch (error) {
    const msg = getErrorMessage(error);
    console.error("submitVolunteerApplication failed:", msg);
    if (
      msg.includes("Insufficient permissions") ||
      msg.includes("permission \"create\"")
    ) {
      console.error(
        "Sanity: the write token must have Editor (create) access."
      );
    }
    return { error: translate("errors.something-went-wrong") };
  }
}

function escape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
