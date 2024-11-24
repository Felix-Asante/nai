import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noble Alms International - NAI",
  description: "NGO organization",
};

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
