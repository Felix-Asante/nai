"use server";

import { apiEndpoints } from "@/lib/api";
import {
  becomeVolunteerInput,
  becomeVolunteerRules,
  subscribeNewsLetterRules,
} from "@/validations";
import { getTranslations } from "next-intl/server";
import { MailtrapClient } from "mailtrap";
import { getErrorMessage } from "@/utils";
import { Resend } from "resend";

export async function subscribeToNewsLetter(email: string) {
  const translate = await getTranslations();
  try {
    const validation = subscribeNewsLetterRules.safeParse({ email });

    if (!validation.success) {
      return { error: translate("errors.invalidEmail") };
    }

    const newsletterFormId = process.env.NEWSLETTER_FORM_ID;
    const endpoint = apiEndpoints.newsletter.subscribe(newsletterFormId!);

    const response = await fetch(endpoint, {
      body: JSON.stringify({
        email,
        api_key: process.env.NEWSLETTER_API_KEY!,
      }),
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      redirect: "follow",
    });

    const results = await response?.json();
    console.log(results);
  } catch (error) {
    return { error: translate("errors.something-went-wrong") };
  }
}

export async function sendVolunteerEmail(data: becomeVolunteerInput) {
  const translate = await getTranslations();
  try {
    const validation = becomeVolunteerRules.safeParse(data);

    if (!validation.success) {
      return { error: translate("errors.bad-request") };
    }

    console.log(data);

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
      console.log(
        `FAILED TO SEND VOLUNTEER REQUEST MESSAGE ${data.email} - ${data.name} - ${data.country} - ${data.phone}`
      );
      return { error: translate("errors.something-went-wrong") };
    }
  } catch (error) {
    console.log(getErrorMessage(error));
    return { error: translate("errors.something-went-wrong") };
  }
}
