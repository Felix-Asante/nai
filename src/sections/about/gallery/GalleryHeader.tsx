"use client";
import PageHero from "@/components/PageHero";
import { useTranslations } from "next-intl";

export default function GalleryHeader() {
  const translate = useTranslations();
  return (
    <PageHero
      eyebrow="In pictures"
      title={translate("gallery.title")}
      description={translate("gallery.description")}
      image="/images/img-24.jpg"
    />
  );
}
