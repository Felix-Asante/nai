import Footer from "@/components/Footer";
import MainNavbar from "@/components/navbars/MainNavbar";
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
    <div lang={locale} className="flex min-h-screen flex-col">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <MainNavbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <Toaster />
      </NextIntlClientProvider>
    </div>
  );
}
