"use client";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import TextAreaInput from "@/components/TextAreaInput";
import { Form } from "@/components/ui/form";
import { SocialMediaIcons } from "@/constants";
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
      link: "https://wa.me/2332412111928",
      icon: SocialMediaIcons.whatsapp,
    },
    {
      label: t("social.sendMessage", { platform: "Facebook" }),
      link: "https://facebook.com",
      icon: SocialMediaIcons.facebook,
    },
    {
      label: t("social.sendMessage", { platform: "Instagram" }),
      link: "https://instagram.com",
      icon: SocialMediaIcons.instagram,
    },
    {
      label: t("social.sendMessage", { platform: "X" }),
      link: "https://twitter.com",
      icon: SocialMediaIcons.x,
    },
  ];

  return (
    <div className="flex flex-col gap-x-8 lg:gap-x-16 gap-y-8 md:flex-row md:items-center">
      <div className="md:w-[65%] lg:w-1/2">
        <h3 className="subtitle text-primary font-bold mb-5">
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
        </div>
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
            <a href="tel:+14374281909" className="hover:underline">
              + 1 437 428 1909
            </a>
            <a href="tel:+233558450707" className="hover:underline">
              + 233 (0) 558450707
            </a>
            <a href="tel:+13432540665" className="hover:underline">
              +1 343 254 0665
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold">{t("visitUs.title")}</h4>
          <p className="text-neutral-300 text-sm">
            {t("visitUs.description", { address: "123 Main Street, Accra" })}
          </p>
          <Link
            className="flex items-center gap-2 font-medium text-sm mt-3"
            href="https://www.google.com/maps"
            target="_blank"
          >
            <MapPinIcon size={16} />
            <span className="hover:underline">123 Main Street, Accra</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
