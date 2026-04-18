import CareersVolunteersPageContent from "@/sections/volunteer/CareersVolunteersPageContent";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "VolunteerPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function CareersAndVolunteersPage() {
  return <CareersVolunteersPageContent />;
}
