import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import React from "react";

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}) {
  const messages = await getMessages();
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
        <Footer />
        <Toaster />
      </NextIntlClientProvider>
    </div>
  );
}
