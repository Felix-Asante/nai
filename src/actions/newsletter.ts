"use server";

import { apiEndpoints } from "@/lib/api";
import { subscribeNewsLetterRules } from "@/validations";
import { getTranslations } from "next-intl/server";

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
