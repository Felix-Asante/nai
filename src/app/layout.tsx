import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noble Alms International - NAI",
  description: "NGO organization",
};

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className={`${bricolageGrotesque.className} antialiased`}>
          <NuqsAdapter>{children}</NuqsAdapter>
        </div>
      </body>
    </html>
  );
}
