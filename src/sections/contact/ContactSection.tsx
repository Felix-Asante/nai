"use client";
import { contactDetails, socialLinks, SocialMediaIcons } from "@/constants";
import { useTranslations } from "next-intl";
import { MapPinIcon, PhoneIcon, MailIcon, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  const t = useTranslations("ContactUsPage");
  const tc = useTranslations("ContactSection");

  const socialAccounts = [
    {
      label: t("social.sendMessage", { platform: "WhatsApp" }),
      link: "https://wa.me/14374281909",
      icon: SocialMediaIcons.whatsapp,
    },
    ...socialLinks.map((s) => ({
      label: t("social.followUs", { platform: s.name }),
      link: s.href,
      icon: s.icon,
    })),
  ];

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
      <Reveal className="lg:col-span-7">
        <div className="rounded-3xl overflow-hidden shadow-elevated ring-1 ring-neutral-200 h-full min-h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183843.22903553862!2d-79.17369617545307!3d43.947976547634525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d21ccd37533%3A0xdd8ceff2f844fcbf!2sOshawa%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sma!4v1735129540270!5m2!1sen!2sma"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[420px]"
            title="Noble Alms International map"
          />
        </div>
      </Reveal>

      <Reveal delay={0.15} className="lg:col-span-5">
        <div className="flex flex-col gap-4">
          {/* Social */}
          <div className="card-surface p-6 md:p-7">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center">
                <MessageCircleIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-700">
                  {t("social.title")}
                </h3>
                <p className="text-sm text-neutral-500">
                  {t("social.description")}
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {socialAccounts.map((item) => (
                <Link
                  target="_blank"
                  href={item.link}
                  key={item.label}
                  className="group flex items-center gap-3 text-sm text-neutral-700 hover:text-primary-700 transition-colors"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                    unoptimized
                  />
                  <span className="group-hover:underline">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Phone */}
          <div className="card-surface p-6 md:p-7">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary-50 text-secondary-600 flex items-center justify-center">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-700">{t("callUs.title")}</h3>
                <p className="text-sm text-neutral-500">
                  {t("callUs.description")}
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1 text-sm">
              {contactDetails.phoneNumbers.map((item) => (
                <a
                  href={`tel:${item.tel}`}
                  key={item.text}
                  className="text-neutral-700 hover:text-primary-700 hover:underline"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="card-surface p-6 md:p-7">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center">
                <MailIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-700">{tc("emailTitle")}</h3>
                <p className="text-sm text-neutral-500">
                  {tc("emailSubtitle")}
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1 text-sm">
              {contactDetails.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="text-neutral-700 hover:text-primary-700 hover:underline"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>

          {/* Visit */}
          <div className="card-surface p-6 md:p-7">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary-50 text-secondary-600 flex items-center justify-center">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-700">{t("visitUs.title")}</h3>
                <p className="text-sm text-neutral-500">
                  {t("visitUs.description", {
                    address: contactDetails.address.headQuaters,
                  })}
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1 text-sm">
              {contactDetails.address.branches.map((item) => (
                <Link
                  href={item.googleMapUrl}
                  target="_blank"
                  key={item.address}
                  className="text-neutral-700 hover:text-primary-700 hover:underline"
                >
                  {item.address}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
