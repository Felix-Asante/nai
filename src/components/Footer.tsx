import React from "react";
import Container from "./layouts/Container";
import NewsLetterSection from "@/sections/NewsLetterSection";
import Image from "next/image";
import { footerRoutes } from "@/constants/routes";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { contactDetails, SocialMediaIcons } from "@/constants";
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";

export default async function Footer() {
  const t = await getTranslations();
  const navLinks = footerRoutes(t);

  const socials = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/noblealmsi",
      icon: SocialMediaIcons.facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/noblealmsinternational",
      icon: SocialMediaIcons.instagram,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/14374281909",
      icon: SocialMediaIcons.whatsapp,
    },
  ];

  return (
    <footer className="relative bg-primary-800 text-white">
      <div
        className="absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(244,81,30,0.18),transparent_60%)]"
        aria-hidden
      />
      <Container className="relative pt-16 md:pt-20 pb-8">
        <NewsLetterSection />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-14 pt-10 border-t border-white/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="Noble Alms International"
                width={48}
                height={48}
                unoptimized
                priority
                className="object-contain rounded-md"
              />
              <div className="leading-tight">
                <div className="font-semibold">Noble Alms</div>
                <div className="text-sm text-white/70">International</div>
              </div>
            </div>
            <p className="mt-5 text-sm md:text-base text-white/75 leading-relaxed max-w-sm">
              Transforming lives, promoting happiness, and unleashing potential
              through education, health, and charity — across borders.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white hover:ring-white flex items-center justify-center transition-colors group"
                >
                  <img
                    src={s.icon}
                    alt=""
                    className="w-5 h-5 opacity-90 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Quick links
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Get in touch
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              {contactDetails.emails.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <MailIcon className="w-4 h-4 mt-0.5 shrink-0 text-secondary-200" />
                  <a href={`mailto:${item}`} className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
              {contactDetails.phoneNumbers.map((item) => (
                <li key={item.tel} className="flex items-start gap-2.5">
                  <PhoneIcon className="w-4 h-4 mt-0.5 shrink-0 text-secondary-200" />
                  <a href={`tel:${item.tel}`} className="hover:text-white transition-colors">
                    {item.text}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 mt-0.5 shrink-0 text-secondary-200" />
                <span>{contactDetails.address.headQuaters}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Noble Alms International. All rights reserved.</p>
          <p>Registered in Ghana & Canada</p>
        </div>
      </Container>
    </footer>
  );
}
