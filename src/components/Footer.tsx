import React from "react";
import Container from "./layouts/Container";
import NewsLetterSection from "@/sections/NewsLetterSection";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { charityInfo, contactDetails, socialLinks } from "@/constants";
import {
  BadgeCheckIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";

export default async function Footer() {
  const t = await getTranslations();
  const tf = await getTranslations("Footer");

  const waysToHelp = [
    { name: t("donate"), href: "/donate" },
    { name: tf("ways.monthlyGiving"), href: "/donate?frequency=monthly" },
    { name: tf("ways.sponsorProject"), href: "/donate#sponsor" },
    { name: tf("ways.corporatePartners"), href: "/partners" },
    { name: tf("ways.careersVolunteers"), href: "/volunteer" },
  ];

  const explore = [
    { name: t("Navbar.aboutUs"), href: "/about-us" },
    { name: t("Navbar.projects"), href: "/projects" },
    { name: t("Navbar.gallery"), href: "/gallery" },
    { name: t("Navbar.contactUs"), href: "/contact-us" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-primary-800 text-white">
      <div
        className="absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(244,81,30,0.18),transparent_60%)]"
        aria-hidden
      />
      <Container className="relative pt-16 md:pt-20 pb-8">
        <NewsLetterSection />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mt-14 pt-10 border-t border-white/10">
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
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
                <div className="font-semibold">{tf("taglineLine1")}</div>
                <div className="text-sm text-white/70">{tf("taglineLine2")}</div>
              </div>
            </Link>

            <p className="mt-5 text-sm md:text-base text-white/75 leading-relaxed max-w-sm">
              {tf("description")}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="w-10 h-10 rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white hover:ring-white flex items-center justify-center transition-colors group"
                >
                  <img
                    src={s.icon}
                    alt=""
                    aria-hidden
                    className="w-5 h-5 opacity-90 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>

            <div className="mt-7 inline-flex items-start gap-2.5 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 max-w-sm">
              <BadgeCheckIcon
                className="w-4 h-4 mt-0.5 shrink-0 text-secondary-200"
                aria-hidden
              />
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                {tf("registeredCharityBadge", {
                  location: charityInfo.registrationLocation,
                })}
                <br />
                <span className="text-white/60">
                  {tf("charityRegLabel")}{" "}
                  <span className="font-mono tracking-wide text-white/90">
                    {charityInfo.registrationNumber}
                  </span>
                </span>
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              {tf("waysToHelpTitle")}
            </h4>
            <ul className="space-y-3 text-sm">
              {waysToHelp.map((item) => (
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

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              {tf("exploreTitle")}
            </h4>
            <ul className="space-y-3 text-sm">
              {explore.map((item) => (
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
              {tf("getInTouchTitle")}
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              {contactDetails.emails.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <MailIcon className="w-4 h-4 mt-0.5 shrink-0 text-secondary-200" />
                  <a
                    href={`mailto:${item}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs uppercase tracking-wider text-white/50">
              {tf("callUsIntro")}
            </p>
            <ul className="mt-2 space-y-2 text-sm text-white/80">
              {contactDetails.phoneNumbers.map((item) => (
                <li key={item.tel} className="flex items-start gap-2.5">
                  <PhoneIcon className="w-4 h-4 mt-0.5 shrink-0 text-secondary-200" />
                  <a
                    href={`tel:${item.tel}`}
                    className="hover:text-white transition-colors"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-start gap-2.5 text-sm text-white/80">
              <MapPinIcon className="w-4 h-4 mt-0.5 shrink-0 text-secondary-200" />
              <span>{contactDetails.address.headQuaters}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-white/60">
          <p>{tf("copyright", { year })}</p>
          <p className="md:text-right">
            {tf("registeredLegal", {
              location: charityInfo.registrationLocation,
              regNumber: charityInfo.registrationNumber,
            })}
          </p>
        </div>
      </Container>
    </footer>
  );
}
