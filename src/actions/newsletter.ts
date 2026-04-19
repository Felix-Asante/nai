"use server";

import { apiEndpoints } from "@/lib/api";
import {
  becomeVolunteerInput,
  becomeVolunteerRules,
  subscribeNewsLetterRules,
} from "@/validations";
import { getTranslations } from "next-intl/server";
import { getErrorMessage } from "@/utils";
import { Resend } from "resend";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function subscribeToNewsLetter(email: string) {
  const translate = await getTranslations();

  const validation = subscribeNewsLetterRules.safeParse({ email });
  if (!validation.success) {
    return { error: translate("errors.invalidEmail") };
  }

  const cleanEmail = validation.data.email;
  const formId = process.env.NEWSLETTER_FORM_ID;
  const apiKey = process.env.NEWSLETTER_API_KEY;

  if (!formId || !apiKey) {
    console.error(
      "subscribeToNewsLetter: NEWSLETTER_FORM_ID or NEWSLETTER_API_KEY is missing.",
    );
    return { error: translate("errors.something-went-wrong") };
  }

  try {
    const response = await fetch(apiEndpoints.newsletter.subscribe(formId), {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        email: cleanEmail,
        api_key: apiKey,
      }),
      redirect: "follow",
    });

    const results: Record<string, unknown> = await response.json().catch(
      () => ({}),
    );

    if (!response.ok) {
      console.error(
        "ConvertKit subscribe failed:",
        response.status,
        results,
      );
      return { error: translate("errors.something-went-wrong") };
    }
  } catch (error) {
    console.error("subscribeToNewsLetter:", getErrorMessage(error));
    return { error: translate("errors.something-went-wrong") };
  }

  const emailToken = process.env.EMAIL_TOKEN;
  const sender = process.env.EMAIL_SENDER_ADDRESS;
  const recipient = process.env.EMAIL_RECEIVER_ADDRESS;

  if (emailToken && sender && recipient) {
    try {
      const emailClient = new Resend(emailToken);
      const notified = await emailClient.emails.send({
        from: sender,
        to: recipient,
        subject: `New newsletter subscriber — ${cleanEmail}`,
        html: `
          <h2>New newsletter subscriber</h2>
          <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
          <p><small>Subscribed at ${escapeHtml(new Date().toISOString())}</small></p>
        `,
      });
      if (notified?.error) {
        console.error(
          "Newsletter: Resend returned error (subscriber was added in ConvertKit):",
          notified.error,
        );
      }
    } catch (mailError) {
      console.error(
        "Newsletter: admin notification email failed (subscriber may still be in ConvertKit):",
        getErrorMessage(mailError),
      );
    }
  } else {
    console.warn(
      "subscribeToNewsLetter: EMAIL_TOKEN, EMAIL_SENDER_ADDRESS, or EMAIL_RECEIVER_ADDRESS is missing — admins were not emailed.",
    );
  }

  return { success: true as const };
}

export async function sendVolunteerEmail(data: becomeVolunteerInput) {
  const translate = await getTranslations();
  try {
    const validation = becomeVolunteerRules.safeParse(data);

    if (!validation.success) {
      return { error: translate("errors.bad-request") };
    }

    const emailAuthToken = process.env.EMAIL_TOKEN!;
    const emailClient = new Resend(emailAuthToken);

    const sender = {
      name: "NAI Website",
      email: process.env.EMAIL_SENDER_ADDRESS!,
    };

    const response = await emailClient.emails.send({
      from: sender.email,
      to: process.env.EMAIL_RECEIVER_ADDRESS!,
      subject: "New Volunteer",
      html: `Name: ${data.name}<br/>Email: ${data.email}<br/>Phone: ${data.phone}<br/>Country: ${data.country}`,
    });

    if (response?.error) {
      console.log("resend error", response.error);
      console.log(
        `FAILED TO SEND VOLUNTEER REQUEST MESSAGE ${data.email} - ${data.name} - ${data.country} - ${data.phone}`,
      );
      return { error: translate("errors.something-went-wrong") };
    }
  } catch (error) {
    console.log(getErrorMessage(error));
    return { error: translate("errors.something-went-wrong") };
  }
}
