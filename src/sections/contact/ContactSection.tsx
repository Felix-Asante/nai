"use client";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import TextAreaInput from "@/components/TextAreaInput";
import { Form } from "@/components/ui/form";
import { contactDetails, SocialMediaIcons } from "@/constants";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const form = useForm();
  const t = useTranslations("ContactUsPage");

  const socialAccounts = [
    {
      label: t("social.sendMessage", { platform: "WhatsApp" }),
      link: "https://wa.me/14374281909",
      icon: SocialMediaIcons.whatsapp,
    },
    {
      label: t("social.sendMessage", { platform: "Facebook" }),
      link: "https://www.facebook.com/noblealmsi",
      icon: SocialMediaIcons.facebook,
    },
    {
      label: t("social.sendMessage", { platform: "Instagram" }),
      link: "https://www.instagram.com/noblealmsinternational?igsh=MTI2cGI1M2x2MzlieA%3D%3D&utm_source=qr",
      icon: SocialMediaIcons.instagram,
    },
    // {
    //   label: t("social.sendMessage", { platform: "X" }),
    //   link: "https://twitter.com",
    //   icon: SocialMediaIcons.x,
    // },
  ];

  return (
    <div className="flex flex-col gap-x-8 lg:gap-x-16 gap-y-8 md:flex-row md:items-center">
      <div className="md:w-[65%] lg:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183843.22903553862!2d-79.17369617545307!3d43.947976547634525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d21ccd37533%3A0xdd8ceff2f844fcbf!2sOshawa%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sma!4v1735129540270!5m2!1sen!2sma"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-3xl"
        ></iframe>
        {/* <h3 className="subtitle text-primary font-bold mb-5">
          {t("form.title")}
        </h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <Form {...form}>
            <form className="flex flex-col gap-4">
              <FormInput
                name="name"
                label={t("form.name.label")}
                placeholder={t("form.name.placeholder")}
                className="bg-transparent"
              />
              <FormInput
                name="email"
                label={t("form.email.label")}
                placeholder={t("form.email.placeholder")}
                className="bg-transparent"
              />
              <TextAreaInput
                control={form.control}
                name="message"
                label={t("form.message.label")}
                placeholder={t("form.message.placeholder")}
              />

              <Button type="submit" size="lg" className="my-5">
                {t("form.submit.label")}
              </Button>
            </form>
          </Form>
        </div> */}
      </div>
      <div className="lg:w-1/2 flex flex-col space-y-4">
        <div>
          <h4 className="font-bold">{t("social.title")}</h4>
          <p className="text-neutral-300 text-sm">{t("social.description")}</p>
          <div className="flex flex-col space-y-2 mt-4">
            {socialAccounts.map((item) => (
              <Link
                target="_blank"
                href={item.link}
                key={item.label}
                className="flex items-center gap-2 fotn-medium text-sm"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  unoptimized
                  priority
                />
                <span className="hover:underline">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold">{t("callUs.title")}</h4>
          <p className="text-neutral-300 text-sm">{t("callUs.description")}</p>
          <div className="flex flex-col gap-1 font-medium text-sm mt-3">
            {contactDetails.phoneNumbers.map((item) => (
              <a
                href={`tel:${item.tel}`}
                key={item.text}
                className="hover:underline"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold">{t("visitUs.title")}</h4>
          <p className="text-neutral-300 text-sm">
            {t("visitUs.description", {
              address: contactDetails.address.headQuaters,
            })}
          </p>
          {contactDetails.address.branches.map((item) => (
            <Link
              className="flex items-center gap-2 font-medium text-sm mt-3"
              href={item.googleMapUrl}
              target="_blank"
              key={item.address}
            >
              <MapPinIcon size={16} />
              <span className="hover:underline">{item.address}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
