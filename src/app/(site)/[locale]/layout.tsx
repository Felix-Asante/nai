import Footer from "@/components/Footer";
import MainNavbar from "@/components/navbars/MainNavbar";
import { Toaster } from "@/components/ui/toaster";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
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

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div lang={locale} className="flex min-h-screen flex-col">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <MainNavbar />
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        <Footer />
        <Toaster />
      </NextIntlClientProvider>
    </div>
  );
}
