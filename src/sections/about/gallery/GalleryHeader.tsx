"use client";
import PageHero from "@/components/PageHero";
import { useTranslations } from "next-intl";

export default function GalleryHeader() {
  const translate = useTranslations("gallery");
  return (
    <PageHero
      eyebrow={translate("heroEyebrow")}
      title={translate("title")}
      description={translate("description")}
      image="/images/img-24.jpg"
    />
  );
}
