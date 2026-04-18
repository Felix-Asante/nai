"use server";

import { getSanityWriteClient } from "@/lib/sanity/sanity.write.client";
import { PartnerInquiryInput, partnerInquiryRules } from "@/validations";
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";
import { getErrorMessage } from "@/utils";
import { revalidateTag } from "next/cache";
import { CACHE_TAGS } from "@/constants/enum";

export async function submitPartnerInquiry(input: PartnerInquiryInput) {
  const translate = await getTranslations();
  try {
    const validation = partnerInquiryRules.safeParse(input);
    if (!validation.success) {
      return { error: translate("errors.bad-request") };
    }

    const data = validation.data;
    const submittedAt = new Date().toISOString();

    const writeClient = getSanityWriteClient();
    if (!writeClient) {
      console.error(
        "submitPartnerInquiry: SANITY_WRITE_TOKEN is missing or empty. Add an Editor API token (server-only) in .env."
      );
      return { error: translate("errors.something-went-wrong") };
    }

    await writeClient.create({
      _type: "partnerInquiry",
      organizationName: data.organizationName,
      contactName: data.contactName,
      email: data.email,
      phone: data.phone || undefined,
      website: data.website || undefined,
      partnershipType: data.partnershipType,
      message: data.message,
      status: "new",
      submittedAt,
    });

    revalidateTag(CACHE_TAGS.PARTNER_INQUIRIES);

    const emailToken = process.env.EMAIL_TOKEN;
    const sender = process.env.EMAIL_SENDER_ADDRESS;
    const recipient = process.env.EMAIL_RECEIVER_ADDRESS;

    if (emailToken && sender && recipient) {
      try {
        const emailClient = new Resend(emailToken);
        await emailClient.emails.send({
          from: sender,
          to: recipient,
          subject: `New partner inquiry — ${data.organizationName}`,
          html: `
            <h2>New Partner Inquiry</h2>
            <p><strong>Organization:</strong> ${escape(data.organizationName)}</p>
            <p><strong>Contact:</strong> ${escape(data.contactName)}</p>
            <p><strong>Email:</strong> ${escape(data.email)}</p>
            <p><strong>Phone:</strong> ${escape(data.phone || "—")}</p>
            <p><strong>Website:</strong> ${escape(data.website || "—")}</p>
            <p><strong>Partnership type:</strong> ${escape(data.partnershipType)}</p>
            <p><strong>Message:</strong></p>
            <p>${escape(data.message).replaceAll("\n", "<br/>")}</p>
          `,
        });
      } catch (mailError) {
        console.warn(
          "Partner inquiry saved but email notification failed:",
          getErrorMessage(mailError)
        );
      }
    }

    return { success: true as const };
  } catch (error) {
    const msg = getErrorMessage(error);
    console.error("submitPartnerInquiry failed:", msg);
    if (
      msg.includes("Insufficient permissions") ||
      msg.includes("permission \"create\"")
    ) {
      console.error(
        "Sanity: the write token must have Editor (create) access. Viewer tokens cannot create documents. Regenerate the token at sanity.io/manage with Editor role."
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
