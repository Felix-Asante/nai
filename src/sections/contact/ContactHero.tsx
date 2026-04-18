"use client";
import PageHero from "@/components/PageHero";
import { useTranslations } from "next-intl";

export default function ContactHero() {
  const t = useTranslations("ContactUsPage");

  return (
    <PageHero
      eyebrow={t("heroEyebrow")}
      title={t("title")}
      description={t("description")}
      image="/images/img-6.jpg"
    />
  );
}
