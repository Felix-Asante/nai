import React from "react";
import Container from "./layouts/Container";
import NewsLetterSection from "@/sections/NewsLetterSection";
import Image from "next/image";
import { footerRoutes } from "@/constants/routes";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { contactDetails } from "@/constants";

export default async function Footer() {
  const t = await getTranslations();
  const navLinks = footerRoutes(t);

  return (
    <footer className="bg-primary text-neutral-100  py-8">
      <Container className="px-6">
        <NewsLetterSection />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 border-t py-5">
          <div>
            <Image
              src="/images/logo.jpg"
              alt="NAI"
              width={50}
              height={50}
              unoptimized
              priority
              className="object-contain"
            />
            <p className="mt-4">
              Noble Alms International transforms lives with joy.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            {contactDetails.emails.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <p className="my-2 font-bold">You can also call us on</p>
            {contactDetails.phoneNumbers.map((item) => (
              <a
                href={`tel:${item.tel}`}
                key={item.text}
                className="hover:underline block w-fit"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </Container>
      <p className="text-center mt-8">
        © {new Date().getFullYear()} Noble Alms International. All rights
        reserved.
      </p>
    </footer>
  );
}
